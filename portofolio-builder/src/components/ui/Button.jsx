// export default function Button({ children, onClick, variant = 'primary', className = '' }) {
//   const base = "px-3 py-1.5 rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg";
//   const variants = {
//     primary: "bg-accent-pink hover:bg-pink-600 text-white focus:ring-accent-pink",
//     secondary: "bg-gray-800 hover:bg-gray-700 text-text-primary focus:ring-gray-500",
//     outline: "border border-accent-pink text-accent-pink hover:bg-accent-pink hover:bg-opacity-10 focus:ring-accent-pink",
//     text: "text-accent-pink hover:text-pink-400",
//   };
//   return <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
// }
// src/components/ui/Button.jsx
export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const base = "px-3 py-1.5 rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg";
  const variants = {
    primary: "bg-accent-pink hover:bg-pink-600 text-white focus:ring-accent-pink",
    secondary: "bg-gray-800 hover:bg-gray-700 text-text-primary focus:ring-gray-500",
    outline: "border border-accent-pink text-accent-pink hover:bg-accent-pink hover:bg-opacity-10 focus:ring-accent-pink",
    text: "text-accent-pink hover:text-pink-400",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}