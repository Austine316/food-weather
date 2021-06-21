import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../Components/RecipeCard";
import { SEARCH_RECIPE_SUCESS } from "../app/RecipeAction";
import Nav from "../Components/Nav";

const Search = () => {
  const data = useSelector((state) => state.recipe.articles);
  // const isSearching = useSelector((state) => state.isSearching);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    receiving: false,
    articles: [],
    text: "",
  });

  const APP_ID = "bd4cb288";
  const APP_KEY = "e0ab7f145874292b56f169203eada733";

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${state.text}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleSubmit = (event) => {
    return event.preventDefault(), searchRecipe();
  };

  function handleValue(event) {
    setState({ ...state, text: event.target.value });
  }

  function searchRecipe() {
    fetch(url).then((reponse) =>
      reponse.json().then((data) => {
        dispatch({ type: SEARCH_RECIPE_SUCESS, dat: data.hits });
      })
    );
  }

  return (
    <div className="recipeContainer">
      <Nav />
      <form onSubmit={handleSubmit}>
        <h2>Search Food Recipe</h2>
        <input
          onChange={handleValue}
          value={state.text}
          type="text"
          placeholder="Search food recipe ..."
        />
      </form>
      <div className="recipeGallery">
        {data.map((items) => {
          return (
            <RecipeCard
              key={items.recipe.url}
              image={items.recipe.image}
              // ingredients={items.recipe.ingredientLines.map(
              //   (ingredientsItems) => {
              //     return <li>{ingredientsItems}</li>;
              //   }
              // )}
              label={items.recipe.label}
              url={items.recipe.url}
              cuisineType={items.recipe.cuisineType}
              calories={items.recipe.calories}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
