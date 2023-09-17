import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm (props) {

  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({name: event.target.name.value, blend: event.target.blend.value, weight:130, origin: event.target.origin.value, price: 16.99, description: event.target.description.value, id: product.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product" />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
};

export default EditProductForm;