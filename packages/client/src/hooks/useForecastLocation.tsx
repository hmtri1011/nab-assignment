import { useState, useEffect, useCallback } from 'react'
import { Forecast } from '@nab-assignment/core/types'

type ForecastResult = {
  forecast: Forecast
}

const useForecastLocation = (locationId: number | undefined) => {
  const [forecast, setForecast] = useState<Forecast | null>()
  const [loading, setLoading] = useState(false)

  const getForecast = useCallback(async () => {
    if (!locationId) {
      setForecast(null)
      return
    }

    setLoading(true)
    const result: ForecastResult = await fetch(
      `/api/location/${locationId}`
    ).then(res => res.json())

    setForecast(result?.forecast)
    setLoading(false)
  }, [locationId])

  useEffect(() => {
    getForecast()
  }, [getForecast])

  return { data: forecast, loading }
}

export default useForecastLocation
