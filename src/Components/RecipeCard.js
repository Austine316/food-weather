import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="recipeItem">
      <div className="recipeImageContainer">
        <a href={props.url} target="_blank">
          <img src={props.image} alt={props.label} />
        </a>
      </div>

      <div className="recipeDetails">
        <h4>{props.label}</h4>
        <hr />
        <strong>Calories:</strong> <span>{props.calories}</span> <br />
        <strong>Cuisine Type: </strong> <span>{props.cuisineType} </span>
        <br />
        <span>
          Click{" "}
          <a href={props.url} target="_blank">
            here
          </a>{" "}
          for more and ingredients information.
        </span>{" "}
      </div>
    </div>
  );
};

export default RecipeCard;
