export interface WeatherResponse {
  queryCost:         number;
  latitude:          number;
  longitude:         number;
  resolvedAddress:   string;
  address:           string;
  timezone:          string;
  tzoffset:          number;
  description:       string;
  days:              CurrentConditions[];
  alerts:            any[];
  stations:          Stations;
  currentConditions: CurrentConditions;
}

export interface CurrentConditions {
  datetime:       string;
  datetimeEpoch:  number;
  temp:           number;
  feelslike:      number;
  humidity:       number;
  dew:            number;
  precip:         number;
  precipprob:     number;
  snow:           number;
  snowdepth:      number;
  preciptype:     Icon[] | null;
  windgust:       number | null;
  windspeed:      number;
  winddir:        number;
  pressure:       number;
  visibility:     number;
  cloudcover:     number;
  solarradiation: number;
  solarenergy:    number;
  uvindex:        number;
  conditions:     Conditions;
  icon:           Icon;
  stations:       ID[] | null;
  source:         Source;
  sunrise?:       string;
  sunriseEpoch?:  number;
  sunset?:        string;
  sunsetEpoch?:   number;
  moonphase?:     number;
  tempmax?:       number;
  tempmin?:       number;
  feelslikemax?:  number;
  feelslikemin?:  number;
  precipcover?:   number;
  severerisk?:    number;
  description?:   string;
  hours?:         CurrentConditions[];
}

export enum Conditions {
  Clear = "Clear",
  Overcast = "Overcast",
  PartiallyCloudy = "Partially cloudy",
  RainOvercast = "Rain, Overcast",
  RainPartiallyCloudy = "Rain, Partially cloudy",
}

export enum Icon {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Cloudy = "cloudy",
  Fog = "fog",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
  Rain = "rain",
}

export enum Source {
  Comb = "comb",
  Fcst = "fcst",
  Obs = "obs",
}

export enum ID {
  Suls = "SULS",
}

export interface Stations {
  SULS: Suls;
}

export interface Suls {
  distance:     number;
  latitude:     number;
  longitude:    number;
  useCount:     number;
  id:           ID;
  name:         ID;
  quality:      number;
  contribution: number;
}

