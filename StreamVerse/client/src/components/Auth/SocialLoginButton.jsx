import { motion } from "framer-motion";

function SocialLoginButton({
  icon,
  text,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition rounded-xl py-3 text-white"
    >
      {icon}
      {text}
    </motion.button>
  );
}

export default SocialLoginButton;