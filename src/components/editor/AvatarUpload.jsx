export default function AvatarUpload({ current, onChange }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block text-sm text-text-secondary mb-2">Avatar (optional)</label>
      <div className="flex items-center gap-4">
        {current && (
          <img
            src={current}
            alt="Preview"
            className="w-12 h-12 rounded-full object-cover border border-gray-700"
          />
        )}
        <label className="px-3 py-2 bg-gray-800 text-text-primary rounded cursor-pointer hover:bg-gray-700">
          Choose Image
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </label>
      </div>
    </div>
  );
}