import { useState, useEffect, useCallback } from 'react'
import { Location } from '@nab-assignment/core/types'

type LocationResult = {
  location: Location
}

const useLocation = (query: string) => {
  const [location, setLocation] = useState<Location>()
  const [loading, setLoading] = useState(false)

  const getWeather = useCallback(async () => {
    setLoading(true)
    const result: LocationResult = await fetch(
      `/api/locations?query=${query}`
    ).then(res => res.json())

    setLocation(result?.location)
    setLoading(false)
  }, [query])

  useEffect(() => {
    getWeather()
  }, [getWeather])

  return { data: location, loading }
}

export default useLocation
