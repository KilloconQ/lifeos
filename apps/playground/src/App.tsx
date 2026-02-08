import "./App.css";
import { useUIStore } from "@lifeos/store";

function App() {
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);

  return (
    <div
      style={{
        background: theme === "dark" ? "#111" : "#eee",
        color: theme === "dark" ? "#eee" : "#111",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default App;
