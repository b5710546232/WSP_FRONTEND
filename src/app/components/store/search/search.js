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
  // 
  // shouldComponentUpdate(nextProps){
  //   return this.props.products!=nextProps.products
  // }

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
  // componentWillUpdate(){
  //   this.props.createSearchProduct(this.props.products)
  // }

  render() {
    // let filterSearch = this.props.categories.filter(
    //   (category) => {
    //     return category.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== 1
    //   }
    // );

    return (
        <div className="col s12 ">
          <div className="filter white  z-depth-2 ">
            <Row>
            <Col s={12}>
              <div className="container ">
                <input  id="search"
                        type="text"
                        required placeholder="Search..."
                        value={this.state.search}
                        onChange={(e)=>this.updateSearch(e)}/>
              </div>
            </Col>
            </Row>
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
    },
    searchProduct: (products,text) => {
      dispatch(searchProduct(products,text))
    },
    createSearchProduct: (products) => {
      dispatch(createSearchProduct(products))
    }
    // addFilter: (filters) => {
    //   dispatch(addFilter(filters))
    // },
    // removeFilter: (filters) => {
    //   dispatch(removeFilter(filters))
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
