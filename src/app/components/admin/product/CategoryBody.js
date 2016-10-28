import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import ProductBody from './ProductBody'
class CategoryBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });

  }

  shouldComponentUpdate(nextProps){
    return this.props.admin.product !== nextProps
  }

  findProductList(category_id){
    let productList = []
    this.props.admin.product.forEach(function(product) {
        if(category_id === product.category)
          productList.push(product)
    })
    return productList
  }

  render() {
    console.log(this.findProductList(3),"ProductList");
    return(
      <li>
        <div className="collapsible-header">Product</div>
        <div className="collapsible-body">

        <ul className="collapsible popout"  data-collapsible="accordion">
        {this.props.admin.category.map(
          (category)=>(
            <li>
              <div className="collapsible-header">{category.name}</div>
              <div className="collapsible-body white">
              <ProductBody products={this.findProductList(category.id)}/>
              </div>
            </li>
          )
        )}
        </ul>
        </div>
      </li>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryBody)
