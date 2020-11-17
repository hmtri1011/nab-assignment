import { useState, useEffect, useCallback } from 'react'
import { Location } from '@nab-assignment/core/types'

type LocationResult = {
  location: Location
}

const useLocation = (query: string) => {
  const [location, setLocation] = useState<Location>()

  const getWeather = useCallback(async () => {
    const result: LocationResult = await fetch(
      `/api/locations?query=${query}`
    ).then(res => res.json())

    setLocation(result?.location)
  }, [query])

  useEffect(() => {
    getWeather()
  }, [getWeather])

  return location
}

export default useLocation
