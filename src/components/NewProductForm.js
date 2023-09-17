import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      blend: event.target.blend.value, 
      description: event.target.description.value,
      weight: 130, 
      price: 16.99,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Add Coffee!" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;