import { useParams } from "react-router-dom";
import { useReposStore } from "../store/useUserRepos";

const UserCardPage = () => {
  const {repo} = useParams();
  const {repos} = useReposStore(state => state);
  const postRepos1 = repos.data.viewer.repositories.nodes;
  const first = postRepos1.find(el => el.id === repo);
  
  return (
    <div className="border-2 border-gray-500 w-[1000px] p-2">
      <div>
        <p>[Название репозитория]</p>
        <p>{first?.name}</p>
      </div>
      <div>
        <p>[кол-во звёзд на github]</p>
        <p>{first?.stargazerCount}</p>
      </div>
      <div>
        <p>[дата последнего коммита]</p>
        <p>{first?.updatedAt.slice(0,10)}</p>
      </div>
      <div>
        <p>[Фото владельца репозитория, если есть]</p>
        <img src={first?.owner.avatarUrl} alt="ava" height={50} width={50}/>
      </div>
      <div>
        <p>[Nickname владельца репозитория с ссылкой на него]</p>
        <a href={first?.owner.url}>{first?.owner.login}</a>
      </div>
      <div>
        <p>[Список используемых языков в репозитории]</p>
        {first?.languages.edges.map(lang => {
          return (
            <p key={lang.node.name}>{lang.node.name}</p>
          )
        })}
      </div>
      <div>
        <p>[Краткое описание репозитория]</p>
        <p>{first?.description}</p>
      </div>
    </div>
  );
};

export default UserCardPage;
