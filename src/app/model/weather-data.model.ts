export class WeatherData {
  base?: string
  clouds?: {all: number}
  name?: string
  wind?: string
  weather?: [{
      id?: number
      main?: string
      description?: string
      icon?: string
  }]
  main?: {temp: number}
}
