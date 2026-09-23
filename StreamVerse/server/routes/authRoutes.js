const router = require("express").Router();
const { register, login, google } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/google", google);

module.exports = router;
