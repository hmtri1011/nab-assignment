import React, { useMemo } from 'react'
import isToday from 'date-fns/isToday'
import isTomorrow from 'date-fns/isTomorrow'
import format from 'date-fns/format'
import { ConsolidatedWeather } from '@nab-assignment/core/types'

interface ForecastItemProps {
  data: ConsolidatedWeather
}

const getImage = (state: string) =>
  `https://www.metaweather.com/static/img/weather/${state}.svg`

const ForecastItem: React.FC<ForecastItemProps> = ({ data }) => {
  const {
    applicable_date,
    max_temp,
    min_temp,
    weather_state_abbr,
    weather_state_name
  } = data

  const title = useMemo(() => {
    const date = new Date(applicable_date)
    if (isToday(date)) {
      return 'Today'
    }
    if (isTomorrow(date)) {
      return 'Tomorrow'
    }

    return format(date, 'E dd MMM')
  }, [applicable_date])

  const image = useMemo(() => getImage(weather_state_abbr), [
    weather_state_abbr
  ])

  return (
    <div className='mt-4'>
      <div className='font-medium text-sm text-primary'>{title}</div>
      <div className='flex my-2'>
        <img src={image} alt='Forecast weather' className='w-8 mr-2' />
        <div className='self-end text-sm'>{weather_state_name}</div>
      </div>
      <div className='text-sm'>
        <p>Max: {Math.round(max_temp)}</p>
        <p>Min: {Math.round(min_temp)}</p>
      </div>
    </div>
  )
}

export default ForecastItem
