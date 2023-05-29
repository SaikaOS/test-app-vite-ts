import MySearch from "../components/MySearch";
import Pagination from "../components/Pagination";
import RepoList from "../components/RepoList";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen my-4">
      <MySearch />
      <RepoList />
      <Pagination />
    </div>
  );
};

export default HomePage;
