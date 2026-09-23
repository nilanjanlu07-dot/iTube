const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    // Check if all fields are filled
    if (!fullName || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already taken.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const googleClient = new OAuth2Client();
const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email, avatar: user.avatar });
const sendAuth = (res, user, status = 200) => res.status(status).json({ success: true, user: publicUser(user), token: generateToken(user._id) });

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ success: false, message: "Name, email, and password are required." });
    if (password.length < 6) return res.status(400).json({ success: false, message: "Password must be at least 6 characters." });
    if (await User.exists({ email: email.toLowerCase() })) return res.status(409).json({ success: false, message: "An account with that email already exists." });
    const user = await User.create({ name, email, password });
    return sendAuth(res, user, 201);
  } catch (error) { return next(error); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: "Email and password are required." });
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user || !user.password || !(await user.comparePassword(password))) return res.status(401).json({ success: false, message: "Invalid email or password." });
    return sendAuth(res, user);
  } catch (error) { return next(error); }
};

exports.google = async (req, res, next) => {
  try {
    const { credential } = req.body;
    const clientId = process.env.GOOGLE_CLIENT_ID;
    if (!clientId) return res.status(500).json({ success: false, message: "GOOGLE_CLIENT_ID is missing from server/.env." });
    if (!credential) return res.status(400).json({ success: false, message: "Google credential is required." });
    const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: clientId });
    const payload = ticket.getPayload();
    if (!payload.email || !payload.sub || !payload.email_verified) return res.status(401).json({ success: false, message: "Google account email is not verified." });
    let user = await User.findOne({ $or: [{ googleId: payload.sub }, { email: payload.email.toLowerCase() }] });
    if (user) {
      user.googleId = payload.sub;
      user.name = payload.name || user.name;
      user.avatar = payload.picture || user.avatar;
      await user.save();
    } else {
      user = await User.create({ name: payload.name || payload.email.split("@")[0], email: payload.email, googleId: payload.sub, avatar: payload.picture || "" });
    }
    return sendAuth(res, user);
  } catch (error) {
    if (error.message?.includes("Token") || error.message?.includes("token")) return res.status(401).json({ success: false, message: "Google sign-in token is invalid or expired." });
    return next(error);
  }
};
