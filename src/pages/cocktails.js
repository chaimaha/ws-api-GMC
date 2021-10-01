import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Cocktails.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const Cocktails = () => {
  const [error, setError] = useState(false);
  const [loading, setLoaing] = useState(false);
  const [reponse, setReponse] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getCocktails();
  }, [text]);

  const getCocktails = async () => {
    try {
      setLoaing(true);
      let getReponse = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      setReponse(getReponse.data.drinks);

      console.log(reponse);
      setLoaing(false);
    } catch (error) {
      setError(true);
      setLoaing(false);
    }
  };

  return (
    <div className="cocktails-page">
      <SearchComponent text={text} setText={setText} />

      {loading ? (
        <h1>Loaging ...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : reponse ? (
        reponse.map((ele) => (
          // <h2>
          //   <div className="service-item">
          //     <h2 className="name-of-drink">{ele.strDrink}</h2>
          //     <img className="img-of-drink" src={ele.strDrinkThumb} alt="" />
          //   </div>
          // </h2>
          <Card
            style={{
              width: "18rem",
              width: "22%",
              padding: "1%",
              margin: "2%",
            }}
            key={ele.idDrink}
          >
            <Card.Img variant="top" src={ele.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{ele.strDrink}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <Link variant="primary" to={`/cocktails/${ele.idDrink}`}>
                More details
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>there is no drink with that name</h1>
      )}
    </div>
  );
};

export default Cocktails;
