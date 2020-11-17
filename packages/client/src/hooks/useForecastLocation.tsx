import { useState, useEffect, useCallback } from 'react'
import { Forecast } from '@nab-assignment/core/types'

type ForecastResult = {
  forecast: Forecast
}

const useForecastLocation = (locationId: number | undefined) => {
  const [forecast, setForecast] = useState<Forecast>()

  const getForecast = useCallback(async () => {
    if (!locationId) {
      return
    }

    const result: ForecastResult = await fetch(
      `/api/location/${locationId}`
    ).then(res => res.json())

    setForecast(result?.forecast)
  }, [locationId])

  useEffect(() => {
    getForecast()
  }, [getForecast])

  return forecast
}

export default useForecastLocation
