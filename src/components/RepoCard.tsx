import React, {useState} from 'react'
import { IRepo } from '../models/models'
import { addFavorites, removeFavorite } from '../store/github/github.slice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

interface RepoCardProps {
    repo: IRepo
}

const RepoCard: React.FC<RepoCardProps> = ({repo}) => {
    const {favorites} = useAppSelector(state => state.github)
    const dispatch = useAppDispatch()

    const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url))

    const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(addFavorites(repo.html_url))
        setIsFavorite(true)
    }

    const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(removeFavorite(repo.html_url))
        setIsFavorite(false)
    }

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all cursor-pointer'>
        <a href={repo.html_url} target='_blank' rel="noreferrer" >
            <h2 className='text-lg font-bold'>{repo.full_name}</h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className='text-sm font-thin'>{repo?.description}</p>

            {isFavorite ?
            <button 
                className='py-2 px-4 bg-red-400 text-white rounded hover:shadow-md transition-all' 
                onClick={removeFromFavorite}
            >
                Remove
            </button>
            :

            <button 
                className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all' 
                onClick={addToFavorites}
            >
                Add
            </button>}
        </a>
    </div>
  )
}

export default RepoCard