import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

function PasswordField({
  value,
  onChange,
  placeholder = "Password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center gap-3 bg-zinc-800/70 border border-zinc-700 rounded-xl px-4 py-3 focus-within:border-red-500 transition-all duration-300">

      <Lock size={20} className="text-zinc-400"/>

      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-400"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-zinc-400 hover:text-white transition"
      >
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>

    </div>
  );
}

export default PasswordField;