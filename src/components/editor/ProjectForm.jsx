import { useState } from 'react';
import Button from '../ui/Button';

export default function ProjectForm({ project, onChange, onRemove, index }) {
  const [techInput, setTechInput] = useState('');

  const updateField = (field, value) => {
    onChange({ ...project, [field]: value });
  };

  const addTech = () => {
    if (techInput.trim() && !project.tech.includes(techInput.trim())) {
      updateField('tech', [...project.tech, techInput.trim()]);
      setTechInput('');
    }
  };

  const removeTech = (tech) => {
    updateField('tech', project.tech.filter(t => t !== tech));
  };

  const handleScreenshot = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => updateField('screenshot', reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-text-primary">Project #{index + 1}</h3>
        {index > 0 && (
          <Button variant="text" onClick={onRemove}>Remove</Button>
        )}
      </div>

      <input
        value={project.title}
        onChange={(e) => updateField('title', e.target.value)}
        placeholder="Project Title"
        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-accent-pink"
      />

      <textarea
        value={project.description}
        onChange={(e) => updateField('description', e.target.value)}
        placeholder="Describe your project in 1-2 sentences"
        rows="2"
        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-accent-pink"
      />

      {/* Tech tags */}
      <div className="mb-3">
        <label className="block text-sm text-text-secondary mb-1">Technologies Used</label>
        <div className="flex gap-2">
          <input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="e.g., React"
            className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-accent-pink text-sm"
            onKeyDown={(e) => e.key === 'Enter' && addTech()}
          />
          <Button variant="outline" onClick={addTech} className="text-sm px-2 py-1">Add</Button>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-gray-700 text-text-primary rounded text-xs">
              {t} <button onClick={() => removeTech(t)} className="ml-1">×</button>
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <input
        value={project.github}
        onChange={(e) => updateField('github', e.target.value)}
        placeholder="GitHub URL (optional)"
        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-1 focus:ring-accent-pink text-sm"
      />
      <input
        value={project.demo}
        onChange={(e) => updateField('demo', e.target.value)}
        placeholder="Live Demo URL (optional)"
        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-accent-pink text-sm"
      />

      {/* Screenshot upload */}
      <div>
        <label className="block text-sm text-text-secondary mb-1">Screenshot (optional)</label>
        <label className="px-3 py-1 bg-gray-800 text-text-primary rounded text-sm cursor-pointer">
          Upload Image
          <input type="file" accept="image/*" onChange={handleScreenshot} className="hidden" />
        </label>
        {project.screenshot && (
          <img src={project.screenshot} alt="Preview" className="mt-2 w-24 h-16 object-cover rounded" />
        )}
      </div>
    </div>
  );
}