import { useSearchStore } from "../store/useSearch";
import CurrentUserRepos from "./CurrentUserRepos";
import SearchRepos from "./SearchRepos";

const RepoList = () => {
  const { inputText } = useSearchStore((state) => state);
  return <div>{inputText ? <SearchRepos /> : <CurrentUserRepos />}</div>;
};

export default RepoList;
