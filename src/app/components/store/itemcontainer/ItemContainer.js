import React, { Component } from 'react'
import {Input} from 'react-materialize'
import Item from '../item/Item'
import {connect} from 'react-redux'
import {loadProductList} from '../../../actions/ProductAction'
class ItemContainer extends Component {
  componentDidMount(){
    this.props.onLoadProductList()
    console.log('list',this.props.products)
  }
  shouldComponentUpdate(nextProps){
    console.log('update');
    return this.props.products !== nextProps
  }
  render() {
    var autoWidthStyle = {

    }
    return (
      <div className="col s12 m12 l12" >
        <div className="row">
          {this.props.products.map((product) =>
            (<Item
              key={product.id}
              name = {product.name}
              description = {product.description}
              price = {product.price}
              {...product}
              />)
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProductList: () => {
      dispatch(loadProductList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
