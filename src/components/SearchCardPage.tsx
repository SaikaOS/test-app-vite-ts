import { useParams } from "react-router-dom";
import { useReposStore } from "../store/useUserRepos";

const SearchCardPage = () => {
  const {repo} = useParams();
  const {repos} = useReposStore(state => state);
  const postRepos1 = repos.data.search.edges;
  const first = postRepos1.find(el => el.node.id === repo);
  
  return (
    <div>
      <div>
        <p>[Название репозитория!]</p>
        <p>{first?.node.name}</p>
      </div>
      <div>
        <p>[кол-во звёзд на github]</p>
        <p>{first?.node.stargazerCount}</p>
      </div>
      <div>
        <p>[дата последнего коммита]</p>
        <p>{first?.node.updatedAt.slice(0, 10)}</p>
      </div>
      <div>
        <p>[Фото владельца репозитория, если есть]</p>
        <img src={first?.node.owner.avatarUrl} alt="ava" height={50} width={50}/>
      </div>
      <div>
        <p>[Nickname владельца репозитория с ссылкой на него]</p>
        <a href={first?.node.owner.url}>{first?.node.owner.login}</a>
      </div>
      <div>
        <p>[Список используемых языков в репозитории]</p>
        {first?.node.languages.edges.map(lang => {
          return (
            <p key={lang.node.name}>{lang.node.name}</p>
          )
        })}
      </div>
      <div>
        <p>[Краткое описание репозитория]</p>
        <p>{first?.node.description}</p>
      </div>
    </div>
  );
};

export default SearchCardPage;
