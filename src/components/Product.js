import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.blend}</h3>
      <h6> from : {props.origin}</h6>
      <h6> weight : {props.weight}</h6>
      <h6> price : {props.price}</h6>
      <p><em>{props.discription}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  blend: PropTypes.string.isRequired,
  weight: PropTypes.number,
  price: PropTypes.number,
  discription: PropTypes.string.isRequired

};

export default Product;