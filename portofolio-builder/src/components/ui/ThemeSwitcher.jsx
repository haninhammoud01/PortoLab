import Button from './Button';

export default function ThemeSwitcher({ current, onChange }) {
  const themes = [
    { id: 'dark-pink', name: 'Dark Pink' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'academic', name: 'Academic' },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {themes.map(theme => (
        <Button
          key={theme.id}
          variant={current === theme.id ? 'primary' : 'outline'}
          onClick={() => onChange(theme.id)}
          className="px-3 py-1 text-sm"
        >
          {theme.name}
        </Button>
      ))}
    </div>
  );
}