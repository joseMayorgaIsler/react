import React, { useState } from "react";

const Detail = (props) => {
    const callSearchDetailFunction = (e) => {
      e.preventDefault();
      props.searchDetail('tt1442449');
    };
    return (
        <form className="search">
          <input onClick={callSearchDetailFunction} type="submit" value="Detalle"/>
        </form>
      );
  };
  export default Detail;