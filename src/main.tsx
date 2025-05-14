
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply dark mode immediately if saved in localStorage or default to dark
const theme = localStorage.getItem("theme") || "dark";
if (theme === "dark") {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
