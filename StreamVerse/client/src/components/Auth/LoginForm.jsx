import { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SocialLoginButton from "./SocialLoginButton";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (

    <form
      onSubmit={handleLogin}
      className="space-y-5 mt-8"
    >

      <InputField
        icon={<Mail size={20} className="text-zinc-400"/>}
        placeholder="Email Address"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <PasswordField
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <div className="flex justify-between items-center text-sm">

        <label className="flex items-center gap-2 text-zinc-400">

          <input
            type="checkbox"
            className="accent-red-600"
          />

          Remember Me

        </label>

        <button
          type="button"
          className="text-red-500 hover:text-red-400"
        >
          Forgot Password?
        </button>

      </div>

      <motion.button
        whileHover={{ scale:1.02 }}
        whileTap={{ scale:0.98 }}
        className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 text-white font-semibold"
      >
        Login
      </motion.button>

      <div className="relative flex items-center">

        <div className="flex-1 border-t border-zinc-700"/>

        <span className="px-3 text-zinc-500 text-sm">
          OR
        </span>

        <div className="flex-1 border-t border-zinc-700"/>

      </div>

      <SocialLoginButton
        text="Continue with Google"
        icon={
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            width="20"
          />
        }
      />

      <p className="text-center text-zinc-400">

        Don't have an account?

        <Link
            to="/signup"
            className="text-red-500 ml-2 hover:text-red-400">
            Create Account
        </Link>

      </p>

    </form>

  );
}

export default LoginForm;