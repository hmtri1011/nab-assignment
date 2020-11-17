import { Router } from 'express'
import * as ForecastController from './controllers/forecast'

const router = Router()

router.get('/locations', ForecastController.getLocations)
router.get('/location/:woeid', ForecastController.getLocationForecast)

export default router
