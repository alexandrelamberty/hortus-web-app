import { number } from "yup";

export interface Weather {
  latitude: number;
  longitude: number;
  timezone: number;
  elevation: number;
  currentWeather: {};
}

interface CurrentWeather {}

interface HourlyWeather {}

interface DailyWeather {}
