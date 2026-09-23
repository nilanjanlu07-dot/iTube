import { useState } from "react";
import { User, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

function SignupForm() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSignup=(e)=>{
    e.preventDefault();

    console.log({
      name,
      email,
      password
    });
  };

  return (

    <form
      onSubmit={handleSignup}
      className="space-y-5 mt-8"
    >

      <InputField
        icon={<User size={20} className="text-zinc-400"/>}
        placeholder="Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

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

      <motion.button
        whileHover={{scale:1.02}}
        whileTap={{scale:0.98}}
        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl text-white font-semibold"
      >
        Create Account
      </motion.button>

      <p className="text-center text-zinc-400">
        Already have an account?
        <Link to="/login" className="ml-2 text-red-500 hover:text-red-400">Login</Link>
      </p>

    </form>
  )
}

export default SignupForm;
