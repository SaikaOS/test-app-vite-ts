import { usePaginationStore } from "../store/usePagination";
import { useReposStore } from "../store/useUserRepos";
import { Link } from "react-router-dom"

const SearchRepos = () => {
  const { repos } = useReposStore((state) => state);
  const { currentPage, postsPerPage } = usePaginationStore((state) => state);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const postRepos = repos.data.search.edges;
  const searchPosts = postRepos.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2 py-4">
      {searchPosts.map((repo) => {
        return (
          <div
            key={repo.node.id}
            className="border-2 border-gray-500 w-[400px] p-2"
          >
            <div>
              <p>[Название репозитория]</p>
              <Link to={`/${repo.node.id}`}>{repo.node.name}</Link>
            </div>
            <div>
              <p>[кол-во звёзд на github]</p>
              <p>{repo.node.stargazerCount}</p>
            </div>
            <div>
              <p>[дата последнего коммита]</p>
              <p>{1}</p>
            </div>
            <div>
              <p>[ссылка на Github]</p>
              <a href={repo.node.url} className="text-xs">
                {repo.node.url}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchRepos;
