import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useReposStore } from "./store/useUserRepos";
import { useSearchStore } from "./store/useSearch";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";

function App() {
  const { fetch } = useReposStore((state) => state);
  const { inputText, setInputText } = useSearchStore((state) => state);

  useEffect(() => {
    fetch(inputText);
    const item = localStorage.getItem("inputValue");
    if (item) {
      setInputText(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":repo" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
