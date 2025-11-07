export default function LinkInput({ value, onChange, label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-text-secondary mb-1">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-pink"
      />
    </div>
  );
}