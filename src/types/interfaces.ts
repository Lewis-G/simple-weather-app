export interface City {
  cityName: string;
  country: string;
  longitude: number;
  latitude: number;
}

export interface SearchBarSuggestion {
  value: string;
  matches: string[];
}
