
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Always default to dark mode unless light mode is explicitly saved
const theme = localStorage.getItem("theme") || "dark";
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
