import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import ProductBody from './ProductBody'
import CategoryEditForm from './CategoryEditForm'
class CategoryBody extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });

  }
  shouldComponentUpdate(nextProps){
    $('#header-form').removeClass("acitve")
    $('#li-form').removeClass("acitve")
    $('#form').css('display','none');
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
    // console.log(this.findProductList(3),"ProductList");
    return(
      <li className="white">
        <div className="collapsible-header">Product</div>
        <div className="collapsible-body">
        <ul className="collapsible popout"  data-collapsible="accordion">
          <li id="li-form">
            <div id="header-form" className="collapsible-header grey lighten-4 center">Add new Category</div>
            <div id="form"className="collapsible-body">
              <CategoryEditForm add={true}/>
            </div>
          </li>
          {this.props.admin.category.map(
            (category)=>(
              <li key={category.id}>
                <div className="collapsible-header">
                  <div className="left">{category.name}</div>
                  <div className="right">
                  {category.is_active?
                    <span className="active-text">Active</span> : <span className="deactive-text">Deactive</span>
                  }
                  </div>
                </div>
                <div className="collapsible-body white">
                <ProductBody select_product={this.findProductList(category.id)} select_category={category}/>
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
