import React, { Component } from 'react'
import SearchBar from 'react-search-bar'
import '../../../assets/scss/search.scss'
import {Icon,Input,NavItem,Row,Navbar,Col} from 'react-materialize'
import {connect} from 'react-redux'
class Search extends Component{
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event){
    this.setState({search:event.target.value},()=>{
      console.log(this.state.search);
    })
  }

  render() {
    let filterSearch = this.props.categories.filter(
      (category) => {
        return category.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== 1;
      }
    );
    return (
        <div className="col s12 ">
          <div className="filter white  z-depth-2 ">
            <Row>
            <Col s={12}>
              <h2 className="container ">
                <SearchBar  id="search"
                        type="search"
                        required placeholder="Search..."
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}/>
              </h2>
            </Col>
            {/* <Col s={1}>
              <Icon>search</Icon>
            </Col> */}
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
    onLoadCategoryList: () => {
      dispatch(loadCategoryList())
    },
    addFilter: (filters) => {
      dispatch(addFilter(filters))
    },
    removeFilter: (filters) => {
      dispatch(removeFilter(filters))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
