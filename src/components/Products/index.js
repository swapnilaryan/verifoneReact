import React from "react";
import {getAllProducts} from "../../apiManager";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    }
  }

  componentDidMount() {
    getAllProducts().then(resp => {
      this.setState({
        productList: resp
      })
    }, (resp) => {
      alert("Error " + resp.message);
      window.location.href = "/";
    })
  }

  render() {
    const {
      productList = []
    } = this.state;

    return (
      <div>
        <h2 className="header">Product List</h2>
        <div className="productListContainer">
          {
            productList.map((product) => {
              return (
                <div key={product.id} className="productContainer">
                  <div className="productImg">
                    <img src={product.image} width={200} height={300}/>
                  </div>
                  <hr />
                  <div className="productDescContainer">
                    <div className="productTitle">{product.title}</div>
                    <div className="productPrice">€ {product.price}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Product