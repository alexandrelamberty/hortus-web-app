export interface Settings {
  location: {
    country: string;
    postalCode: string;
  };
  plants: {
    defaultView: string;
  };
  seeds: {
    defaultView: string;
  };
  culture: {
    defaultView: string;
  };
  weather: {
    api: string;
    key: string;
  };
}
