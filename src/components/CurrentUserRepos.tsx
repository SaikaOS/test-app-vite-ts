import { usePaginationStore } from "../store/usePagination";
import { useReposStore } from "../store/useUserRepos";
import { Link } from "react-router-dom";

const CurrentUserRepos = () => {
  const { repos } = useReposStore((state) => state);
  const { currentPage, postsPerPage } = usePaginationStore((state) => state);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const postRepos = repos.data.viewer.repositories.nodes;
  const currentUserPosts = postRepos.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2 py-4">
      {currentUserPosts.map((repo) => {
        return (
          <div key={repo.id} className="border-2 border-gray-500 w-[400px] p-2">
            <div>
              <p>[Название репозитория]</p>
              <Link to={`/${repo.id}`}>{repo.name}</Link>
            </div>
            <div>
              <p>[кол-во звёзд на github]</p>
              <p>{repo.stargazerCount}</p>
            </div>
            <div>
              <p>[дата последнего коммита]</p>
              <p>{1}</p>
            </div>
            <div>
              <p>[ссылка на Github]</p>
              <Link to={repo.url} className="text-xs">
                {repo.url}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentUserRepos;
