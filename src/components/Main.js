import React from "react";

const Main = (props) => {
  return (
    <div className="food-wrap">
      {props.foods.length !== 0
        ? props.foods.map((food) => (
            <div className="card" key={food.recipe.label}>
              <div className="card-food">
                <div
                  className="card-top"
                  style={{ backgroundImage: "url(" + food.recipe.image + ")" }}
                ></div>
                <div className="card-bottom">
                  <h6>{food.recipe.label}</h6>

                  <ul className="ingredients">
                    {food.recipe.ingredients.map((ingredient) => (
                      <li>{ingredient.text}</li>
                    ))}
                  </ul>
                  <a href={food.recipe.url} target="_blank">
                    SEE MORE
                  </a>
                </div>
              </div>
            </div>
          ))
        : "Search for food."}
    </div>
  );
};

export default Main;
