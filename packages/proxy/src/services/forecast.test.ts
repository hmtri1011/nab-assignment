import nock from 'nock'
import { getLocations, getLocationForecast } from '../services/forecast'

const mockLocationData = [
  {
    title: 'London',
    location_type: 'City',
    woeid: 44418,
    latt_long: '51.506321,-0.12714'
  }
]

const mockForecastData = {
  consolidated_weather: [
    {
      id: 6027348999667712,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      wind_direction_compass: 'SSW',
      created: '2020-11-18T03:20:02.143870Z',
      applicable_date: '2020-11-18',
      min_temp: 8.855,
      max_temp: 15.84,
      the_temp: 14.879999999999999,
      wind_speed: 11.364120399170181,
      wind_direction: 209.82254088579026,
      air_pressure: 1014.0,
      humidity: 71,
      visibility: 10.768052075876879,
      predictability: 73
    }
  ],
  time: '2020-11-18T05:21:32.433701Z',
  sun_rise: '2020-11-18T07:24:16.052264Z',
  sun_set: '2020-11-18T16:06:44.049497Z',
  timezone_name: 'LMT',
  parent: {
    title: 'England',
    location_type: 'Region / State / Province',
    woeid: 24554868,
    latt_long: '52.883560,-1.974060'
  },
  title: 'London',
  location_type: 'City',
  woeid: 44418,
  latt_long: '51.506321,-0.12714',
  timezone: 'Europe/London'
}

nock('https://www.metaweather.com')
  .get('/api/location/search/')
  .query({ query: 'london' })
  .reply(200, mockLocationData)
  .get('/api/location/44418')
  .reply(200, mockForecastData)

describe('check getLocations service', () => {
  it('should return first element without error', async () => {
    const data = await getLocations('london')

    expect(data).toEqual(mockLocationData[0])
  })
})

describe('check getLocationForecast service', () => {
  it('should return data without error', async () => {
    const data = await getLocationForecast(44418)

    expect(data).toEqual(mockForecastData)
  })
})
