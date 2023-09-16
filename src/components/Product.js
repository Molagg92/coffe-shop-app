import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name} - {props.blend}</h3>
        
       
        <h6> price per pound : {props.price}</h6>
        <p><em>{props.discription}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  blend: PropTypes.string.isRequired,
  weight: PropTypes.number,
  price: PropTypes.number,
  discription: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product;