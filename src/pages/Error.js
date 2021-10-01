import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <div className="Err">
        <div className="number">404</div>
        <div className="text">
          <span>Ooops...</span>
          <br />
          page not found
        </div>
        {/* <a
          className="me"
          href="https://codepen.io/uzcho_/pens/popular/?grid_type=list"
          target="_blank"
          rel="noreferrer"
        /> */}
      </div>
    </div>
  );
};

export default Error;
