import React from 'react'

import { ReactComponent as SearchIcon } from 'assets/search.svg'

const Search: React.FC<React.HTMLAttributes<HTMLInputElement>> = props => {
  return (
    <div className='relative flex items-center'>
      <SearchIcon
        className='absolute left-2'
        width='2rem'
        height='2rem'
        color='#ccc'
      />
      <input
        className='w-full pl-10 pr-4 py-2  border-2 rounded'
        placeholder='Search'
        {...props}
      />
    </div>
  )
}

export default Search
