import { combineReducers } from "redux";

export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const SEARCH_RECIPE_SUCESS = "SEARCH_RECIPE_SUCESS";
export const SEARCH_RECIPE_FAILURE = "SEARCH_RECIPE_FAILURE";

export const SEARCH_WEATHER = "SEARCH_WEATHER";

const initialState = {
  isSearching: false,
  articles: [],
};

const initialWeather = {
  weatherArticle: [],
};

const searchRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RECIPE:
      return {
        isSearching: true,
        articles: [],
      };

    case SEARCH_RECIPE_SUCESS:
      return {
        isSearching: false,
        articles: action.dat,
      };

    case SEARCH_RECIPE_FAILURE:
      return {
        isSearching: false,
        articles: [],
      };

    default:
      return state;
  }
};

const searchWeather = (state = initialWeather, action) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return {
        weatherArticle: action.weatherData,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  // combine these reducers into 1 as an object
  recipe: searchRecipeReducer,
  weather: searchWeather,
});

export default rootReducer;
