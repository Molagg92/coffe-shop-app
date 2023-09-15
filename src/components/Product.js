import React from "react";

function Product(){
  const name = "Columbian";
  const name2 = "Arabian";
  return (
    <React.Fragment>
      <h3>this a product name</h3>
      <h3>{name} and {name2}</h3>
      <p><em>placeholder stuff goes in here!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Product;