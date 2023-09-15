import React from "react";
import IndexPhoto from "./../img/IndexPhoto.jpg";

function Header(){
  return (
    <React.Fragment>
    <h1>Welcome to the Coffee Shop!</h1>
    <img src={IndexPhoto} alt="An pic of the coffee shop" />
    </React.Fragment>
  );
}

export default Header;