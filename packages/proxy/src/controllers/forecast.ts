import express from 'express'
import axios, { AxiosError } from 'axios'
import { Location, Forecast } from '@nab-assignment/core/types'

const baseUrl = 'https://www.metaweather.com/api'

export const getLocations = async (
  req: express.Request,
  res: express.Response
) => {
  const { query } = req.query

  try {
    const result = await axios.get<Location[]>(
      `${baseUrl}/location/search/?query=${query}`
    )

    const location = result.data?.[0]
    return res.json({ location })
  } catch (err) {
    console.error((err as AxiosError).response?.data)
    return res.json({ message: 'Something went wrong!' })
  }
}

export const getLocationForecast = async (
  req: express.Request,
  res: express.Response
) => {
  const { woeid } = req.params

  try {
    const result = await axios.get<Forecast>(`${baseUrl}/location/${woeid}`)
    const forecast = result.data

    return res.json({ forecast })
  } catch (err) {
    console.error((err as AxiosError).response?.data)
    return res.json({ message: 'Something went wrong!' })
  }
}
