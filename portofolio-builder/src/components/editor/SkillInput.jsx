import { useState } from 'react';
import Button from '../ui/Button';

export default function SkillInput({ skills, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const addSkill = () => {
    if (inputValue.trim() && !skills.includes(inputValue.trim())) {
      onChange([...skills, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove) => {
    onChange(skills.filter(s => s !== skillToRemove));
  };

  return (
    <div>
      <label className="block text-sm text-text-secondary mb-2">Skills</label>
      <div className="flex gap-2 mb-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g., React"
          className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent-pink"
          onKeyDown={(e) => e.key === 'Enter' && addSkill()}
        />
        <Button variant="outline" onClick={addSkill}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-2 py-1 bg-accent-pink bg-opacity-20 text-accent-pink rounded text-sm flex items-center">
            {skill}
            <button onClick={() => removeSkill(skill)} className="ml-1 text-xs">×</button>
          </span>
        ))}
      </div>
    </div>
  );
}