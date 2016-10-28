import React, { Component } from 'react'
import {connect} from 'react-redux'

class OrderBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  shouldComponentUpdate(nextProps){
    console.log(this.props.admin.order,"list order");
    // console.log(this.props,admin.item_line);

    return this.props.admin.order !== nextProps
  }

  render() {
    return(
      <li>
        <div className="collapsible-header">Order</div>
        <div className="collapsible-body">
          {/* <ul className="collapsible popout"  data-collapsible="accordion">
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
          </ul> */}
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderBody)
