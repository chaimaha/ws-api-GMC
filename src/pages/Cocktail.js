import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./Cocktail.css";

const Cocktail = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [reponse, setreponse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getCocktails();
  }, []);
  const getCocktails = async () => {
    try {
      setloading(true);
      let getReponse = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setreponse(getReponse.data.drinks[0]);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  };
  return (
    <div className="cocktails-page">
      {loading ? (
        <h1>...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <aside className="profile-card">
          <header>
            {/* here’s the avatar */}
            <a target="_blank" href="#">
              <img src={reponse.strDrinkThumb} className="hoverZoomLink" />
            </a>
            {/* the cocktailname */}
            <h1>{reponse.strDrink}</h1>
          </header>
          {/* bit of a bio; who are you? */}
          <div className="profile-bio">
            <p>{reponse.strInstructions}</p>
            <p>{reponse.strInstructionsDE}</p>
            <p>{reponse.strInstructionsIT}</p>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Cocktail;
