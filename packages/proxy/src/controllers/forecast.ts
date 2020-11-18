import express from 'express'
import { AxiosError } from 'axios'

import * as ForecastServices from '../services/forecast'

export const getLocations = async (
  req: express.Request,
  res: express.Response
) => {
  const { query } = req.query

  try {
    const location = await ForecastServices.getLocations(query as string)

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
    const forecast = await ForecastServices.getLocationForecast(+woeid)

    return res.json({ forecast })
  } catch (err) {
    console.error((err as AxiosError).response?.data)
    return res.json({ message: 'Something went wrong!' })
  }
}
