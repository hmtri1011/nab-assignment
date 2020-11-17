import { ChangeEvent, useCallback, useState } from 'react'
import debounce from 'lodash.debounce'

const useSearch = () => {
  const [search, setSearch] = useState('')

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value || value.length < 2) {
      return
    }

    setSearch(value)
  }, [])

  // debounce change event 250ms for better performance
  return { search, handleSearch: debounce(handleSearch, 250) }
}

export default useSearch
