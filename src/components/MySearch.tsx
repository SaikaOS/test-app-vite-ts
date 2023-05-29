import { useSearchStore } from "../store/useSearch";

const MySearch = () => {
  const { inputText, setInputText } = useSearchStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("inputValue", e.target.value); 
    setInputText(e.target.value);
  }

  return (
    <input
      type="search"
      className="block w-1/2 p-4 pl-10 text-sm text-gray-900 border
     border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
   focus:border-blue-500 dark:bg-gray-700
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
     dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search repos..."
      value={inputText}
      onChange={handleChange}
    />
  );
};

export default MySearch;
