import React from 'react'

const header = (props) =>{
    return(
      <header className="App-header">
        <h2>{props.text}</h2>
      </header>
    );
};

export default header;