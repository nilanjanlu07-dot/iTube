function InputField({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 bg-zinc-800/70 border border-zinc-700 rounded-xl px-4 py-3 focus-within:border-red-500 transition">
      {icon}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-400"
      />
    </div>
  );
}

export default InputField;