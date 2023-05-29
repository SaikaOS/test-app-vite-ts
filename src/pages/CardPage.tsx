import { useSearchStore } from '../store/useSearch'
import SearchCardPage from '../components/SearchCardPage'
import UserCardPage from '../components/UserCardPage'

const CardPage = () => {
  const {inputText} = useSearchStore(state => state)
  return (
    <div className='flex justify-center items-center h-screen'>
    {inputText ? <SearchCardPage /> : <UserCardPage />}
    </div>
  )
}

export default CardPage