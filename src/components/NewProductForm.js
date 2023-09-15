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
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Pair Names' />
        <input
          type='text'
          name='origin'
          placeholder='origin' />
        <input
          type='text'
          name='blend'
          placeholder='blend' />
        <textarea
          name='discription'
          placeholder='Give a discription.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;