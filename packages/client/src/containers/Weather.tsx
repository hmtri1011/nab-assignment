import React, { useState } from 'react'

import { Search } from 'components'
import { useSearch, useLocation, useForecastLocation } from 'hooks'

interface WeatherProps {}

const Weather: React.FC<WeatherProps> = () => {
  const { search, handleSearch } = useSearch()
  const location = useLocation(search)
  const locationForecast = useForecastLocation(location?.woeid)

  console.log('ahihi locationForecast search', search, locationForecast)

  return (
    <main className='py-6 bg-bg'>
      <div className='container min-h-screen'>
        <div className='w-1/2'>
          <Search onChange={handleSearch} />
        </div>
      </div>
    </main>
  )
}

export default Weather
