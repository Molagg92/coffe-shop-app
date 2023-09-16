import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter(product => product.id !== id);
    this.setState({
      mainProductList: newMainProductList,
      selectedProduct: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct}  onClickingDelete = {this.handleDeletingProduct} />
      buttonText = "Return to Product List";
      // While our ProductDetail component only takes placeholder data, we will eventually be passing the value of selectedProduct as a prop.
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList} onProductSelection={this.handleChangingSelectedProduct} />;
      // Because a user will actually be clicking on the Product in the Product component, we will need to pass our new handleChangingSelectedProduct method as a prop.
      buttonText = "Add Product"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ProductControl;