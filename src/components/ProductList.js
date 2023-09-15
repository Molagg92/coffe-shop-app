import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.productList.map((product, index) =>
        <Product name={product.name}
          blend={product.blend}
          origin={product.origin}
          weight={product.weight}
          price={product.price}
          discription={product.discription}
          key={index}/>
      )}
    </React.Fragment>
  );

  // return (
  // <React.Fragment>
  //   <Product 
  //   name="Columbian"
  //   blend="Dark Roast"
  //   origin="China"
  //   weight="130"
  //   price="16.99"
  //   discription="The Standard for the working man, packed with more caffien than flavor"
  //   />
  //   <Product 
  //   name="Arabian"
  //   blend="Medium Roast"
  //   origin="China"
  //   weight="130"
  //   price="16.99"
  //   discription="America's favorite, common household coffee roast"
  //   />
  // </React.Fragment>
  //   );
}

ProductList.propTypes = {
  productList: PropTypes.array
};

export default ProductList;