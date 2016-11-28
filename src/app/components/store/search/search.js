import React, { Component } from 'react'
import SearchBar from 'react-search-bar'
import '../../../../assets/scss/search.scss'
import {Icon,Input,NavItem,Row,Navbar,Col} from 'react-materialize'
import {connect} from 'react-redux'
import {searchProduct,createSearchProduct} from '../../../actions/SearchAction'
import {loadProductList} from '../../../actions/ProductAction'
class Search extends Component{
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  componentWillMount(){
    this.props.onLoadProductList()
  }

  updateSearch(event){
    this.setState({search: event.target.value},()=>{
      console.log(this.state.search,"search");
      this.props.searchProduct(this.props.products,this.state.search)
    })
  }

  componentDidMount(){
    this.props.createSearchProduct(this.props.products)
  }

  render() {
    let margin = {
      paddingLeft : "10px",
      paddingRight : "10px"
    }
    return (
        <div
          style={margin}
        >
          <Input
            placeholder="Search..."
            onChange={(e)=>this.updateSearch(e)          }
            s={12}

          />
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
    },
    searchProduct: (products,text) => {
      dispatch(searchProduct(products,text))
    },
    createSearchProduct: (products) => {
      dispatch(createSearchProduct(products))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
