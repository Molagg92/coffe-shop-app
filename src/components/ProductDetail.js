import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.name} - {product.blend}</h3>
        <h6> from : {product.origin}</h6>
        <h6> weight : {product.weight}</h6>
        <h6> price : {product.price}</h6>
        <p><em>{product.discription}</em></p>
        <button onClick={()=> onClickingDelete(product.id) }>Remove Coffe Product </button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ProductDetail;