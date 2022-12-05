import { Form } from "semantic-ui-react";

const weather_providers = [
  {
    key: "open_weather",
    text: "OpenWeather",
    value: "openweather",
    website: "https://openweathermap.org/api",
    image: { avatar: true, src: "/images/open_weather_logo.png" },
  },
  {
    key: "weather_api",
    text: "Weather Api",
    value: "weather_api",
    website: "https://www.weatherapi.com/",
    image: { avatar: true, src: "/images/weatherapi_logo.webp" },
  },
  {
    key: "open_meteo",
    text: "Open Meteo",
    value: "open_meteo",
    website: "https://open-meteo.com/",
    image: { avatar: true, src: "/images/open_meteo_logo.png" },
  },
];
/**
 *
 * @returns
 */
export const SettingsForm = () => {
  // TODO: once provider and key provided, make a test call to the appropriate
  // services
  return (
    <Form size="mini">
      <Form.Field>
        <Form.Dropdown
          placeholder="Select a provider"
          selection
          label="Weather API provider"
          options={weather_providers}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          placeholder="ex: 72d34b7e-d82c-455b-99c5-9a38830be131"
          label="API key"
        />
      </Form.Field>
    </Form>
  );
};
