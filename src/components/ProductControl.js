import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import EditProductForm from './EditProductForm';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
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

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingProductInList = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
        mainProductList: editedMainProductList,
        editing: false,
        selectedProduct: null
      });
  }

  handleSellProductInList = (id) => {
    let newSellProductList = this.state.mainProductList;
    if(newSellProductList.filter(product => product.id === id)[0].weight >= 2){
    newSellProductList.filter(product => product.id === id)[0].weight--;
  }
    else{
      newSellProductList.filter(product => product.id === id)[0].weight = 0;
    }
    this.setState({mainProductList: newSellProductList, formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditProductForm product = {this.state.selectedProduct} onEditProduct = {this.handleEditingProductInList} />
      buttonText = "Return to Product List";
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = 
      <ProductDetail 
        product = {this.state.selectedProduct} 
        onClickingDelete = {this.handleDeletingProduct} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Product List";
      
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList} onProductSelection={this.handleChangingSelectedProduct} 
      onSell={this.handleSellProductInList} />;
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