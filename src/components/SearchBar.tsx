import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { SearchBarSuggestion } from "../types/interfaces";

const SearchBar = ({ suggestions, addCity, savedCities }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const newFilteredSuggestions: string[] = [];
    let suggestionIncluded = false;

    suggestions.forEach((suggestion) => {
      suggestionIncluded = false;

      suggestion.matches.forEach((match) => {
        if (
          match.includes(searchInput) &&
          !suggestionIncluded &&
          !savedCities.includes(suggestion.value)
        ) {
          newFilteredSuggestions.push(suggestion.value);
          suggestionIncluded = true;
        }
      });
    });

    setFilteredSuggestions(newFilteredSuggestions);
  }, [suggestions, searchInput, savedCities]);

  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
  };

  const handleSelection = (selectedCity: string) => {
    addCity(selectedCity);
  };

  return (
    <div>
      <h1>Search</h1>

      <input
        type="search"
        placeholder="Search for a city"
        onChange={handleSearchBarChange}
        value={searchInput}
      />

      <ul>
        {filteredSuggestions.map((suggestion) => {
          return (
            <li key={suggestion}>
              <button
                onClick={() => {
                  handleSelection(suggestion);
                }}
              >
                {suggestion}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface Props {
  suggestions: SearchBarSuggestion[];
  addCity: (param: string) => void;
  savedCities: string[];
}

export default SearchBar;
