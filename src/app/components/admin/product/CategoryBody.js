import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import ProductBody from './ProductBody'
import {deactiveCategory,reactiveCategory} from '../../../actions/AdminAction'
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
  deactiveCategory(e,id){
    e.preventDefault()
    this.props.deactiveCategory(id,localStorage.token)
  }
  reactiveCategory(e,id){
    e.preventDefault()
    this.props.reactiveCategory(id,localStorage.token)
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
                      <i className="material-icons done-icon" onClick={(e)=>this.deactiveCategory(e,category.id)}>done</i> : <i className="material-icons clear-icon" onClick={(e)=>this.reactiveCategory(e,category.id)}>clear</i>
                    }
                    <CategoryEditModal select_category={category} />
                  </div>
                </div>
                <div className="collapsible-body white">
                <ProductBody select_product={this.findProductList(category.id)} select_category={category.id}/>
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
    deactiveCategory:(id,token)=>(dispatch(deactiveCategory(id,token))),
    reactiveCategory:(id,token)=>(dispatch(reactiveCategory(id,token)))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryBody)
