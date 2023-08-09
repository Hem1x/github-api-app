import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)

  if(favorites.length === 0) return <p className='text-center'>No items</p>

  return (
    <div className='flex flex-col items-center pt-10 mx-auto h-screen w-screen'>
      <h1 className='text-[2rem] font-bold mb-3'>Favorites</h1>
      <ul className='list-none'>
        {favorites.map(f => (
          <li key={f}>
            <a href={f} target='_blank' rel="noreferrer">{f}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavoritesPage