import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  function switchMode() {
    setIsDark((prev) => {
      const newMode = !prev;
      const html = document.documentElement;
      console.log(html)
      if (newMode) {
        html.classList.add("dark");
        html.style.backgroundColor = "var(--color-background-dark)"
      } else {
        html.classList.remove("dark");
        html.style.backgroundColor = "var(--color-background)"
      }

      return newMode;
    });
  }

  return (
    <>
      <div className="w-20 h-20 bg-background dark:bg-background-dark border-2 text-text dark:text-text-dark flex items-center justify-center">
        Hello
      </div>
      <button
        className="border p-2 rounded shadow cursor-pointer"
        onClick={switchMode}
      >
        {isDark ? "Turn Off Dark Mode" : "Turn On Dark Mode"}
      </button>
    </>
  );
}

export default App;
