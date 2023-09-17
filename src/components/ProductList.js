import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";


function ProductList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.productList.map((product) =>
        <Product
          whenProductClicked = { props.onProductSelection }
          name={product.name}
          blend={product.blend}
          origin={product.origin}
          weight={product.weight}
          price={product.price}
          description={product.description}
          id={product.id}
          key={product.id}/>
      )}
    </React.Fragment>
  );
}


ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;