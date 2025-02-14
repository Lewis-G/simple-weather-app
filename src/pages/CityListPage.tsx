import { Outlet } from "react-router-dom";
import { useState } from "react";
import { City } from "../types/interfaces";
import { SearchBarSuggestion } from "../types/interfaces";
import SearchBar from "../components/SearchBar";

import cityData from "../data/cities.json";

function CityParentPage() {
  const cities: City[] = cityData;

  const suggestions: SearchBarSuggestion[] = cities.map((city) => ({
    value: `${city.cityName}, ${city.country}`,
    matches: [city.cityName, city.country],
  }));

  const [savedCities, setSavedCities] = useState<string[]>([]);

  const addItem = (item: string) => {
    if (!savedCities.includes(item)) {
      setSavedCities((prevList) => [...prevList, item]);
    }
  };

  const removeItem = (itemToRemove: string) => {
    setSavedCities((prevList) =>
      prevList.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <div>
      <h1>Saved Cities</h1>
      <ul>
        {savedCities.map((cityName, index) => {
          return (
            <li key={index}>
              <button onClick={() => removeItem(cityName)}>{cityName}</button>
            </li>
          );
        })}
      </ul>

      <SearchBar
        suggestions={suggestions}
        addCity={addItem}
        savedCities={savedCities}
      ></SearchBar>

      <Outlet />
    </div>
  );
}
export default CityParentPage;
