import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import "./Cocktails.css";

const SearchComponent = ({ text, setText }) => {
  return (
    <div className="searchdiv">
      <Form className="d-flex">
        {/* input  */}
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          style={{ fontSize: "1.5rem" }}
          onChange={(e) => {
            setText(e.target.value);
            // console.log(e.target.value);
          }}
        />
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>
    </div>
  );
};

export default SearchComponent;
