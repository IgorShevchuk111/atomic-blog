import { useDarkModeContextProvider } from "./DarkModeProvider";

function DarkModeButton() {
  const { isFakeDark, setIsFakeDark } = useDarkModeContextProvider();
  return (
    <button
      className="btn-fake-dark-mode"
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeButton;
