import React, { useMemo } from 'react'

import { Search, ForecastItem } from 'components'
import { useSearch, useLocation, useForecastLocation } from 'hooks'

interface WeatherProps {}

const Weather: React.FC<WeatherProps> = () => {
  const { search, handleSearch } = useSearch()
  const { data: location, loading: locationLoading } = useLocation(search)
  const {
    data: locationForecast,
    loading: forecastLoading
  } = useForecastLocation(location?.woeid)

  const loading = useMemo(() => locationLoading || forecastLoading, [
    locationLoading,
    forecastLoading
  ])

  return (
    <main className='py-6 bg-bg'>
      <div className='container min-h-screen'>
        <div className='w-1/2'>
          <Search onChange={handleSearch} />
        </div>
        <div className='mt-6'>
          {loading && <div>Loading.....!</div>}
          {!loading && locationForecast && (
            <div className='grid grid-cols-7 col-gap-2 items-center'>
              <div className='col-span-1 font-medium text-lg text-primary'>
                <p>{locationForecast.title}</p>
              </div>

              {locationForecast?.consolidated_weather?.length && (
                <div className='grid col-span-6 grid-cols-6'>
                  {locationForecast.consolidated_weather.map(forecast => (
                    <ForecastItem key={forecast.id} data={forecast} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Weather
