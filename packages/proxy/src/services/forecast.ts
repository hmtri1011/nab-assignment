import axios from 'axios'
import { Location, Forecast } from '@nab-assignment/core/types'

const baseUrl = 'https://www.metaweather.com/api'

export const getLocations = async (query: string) => {
  const result = await axios.get<Location[]>(
    `${baseUrl}/location/search/?query=${query}`
  )

  const location = result.data?.[0]
  return location
}

export const getLocationForecast = async (woeid: number) => {
  const result = await axios.get<Forecast>(`${baseUrl}/location/${woeid}`)
  const forecast = result.data

  return forecast
}
