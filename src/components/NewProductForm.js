import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      blend: event.target.blend.value, 
      discription: event.target.discription.value,
      weight: 130, 
      price: 16.99,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Title/Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='text'
          name='blend'
          placeholder='Blend/Roast' />
        <textarea
          name='discription'
          placeholder='Give a discription.' />
        <button type='submit'>Add a Coffee Product!</button>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;