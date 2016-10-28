import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import ProductBody from './ProductBody'
import CategoryEditForm from './CategoryEditForm'
import CategoryEditModal from './CategoryEditModal'
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
      <li className="white">
        <div className="collapsible-header">Product</div>
        <div className="collapsible-body">
        <ul className="collapsible popout"  data-collapsible="accordion">
          <li>
            <div className="collapsible-header grey lighten-4 center">Add new Category</div>
            <div className="collapsible-body grey lighten-4">
              <CategoryEditForm add={true}/>
            </div>
          </li>
          {this.props.admin.category.map(
            (category)=>(
              <li>
                <div className="collapsible-header">
                  <div className="left">{category.name}</div>
                  <div className="right">
                    {category.is_active?
                      <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>
                    }
                    <CategoryEditModal select_category={category} />
                  </div>
                </div>
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
