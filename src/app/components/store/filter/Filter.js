import React, { Component } from 'react'
import FilterItem from '../filteritem/FilterItem'
import '../../../../assets/scss/filter.scss'
import {loadCategoryList} from '../../../actions/CategoryAction'
import {connect} from 'react-redux'

class Filter extends Component {
  componentDidMount(){
    this.props.onLoadCategoryList()
  }
  shouldComponentUpdate(nextProps){
    return this.props.categories !== nextProps
  }
  render() {
    return (
      <div className="col s12 ">
        <div className="filter white  z-depth-2 ">
          <div className="row ">
              <h5 className="container ">Category</h5>
          </div>
          <div className="container ">
            <div className="filter-component row " >
              {this.props.categories.map((category) =>
                (<FilterItem
                  key={category.id}
                  name ={category.name}
                  {...category}
                  />)
              )}
              {/* <FilterItem name="Bottle" id="1"/> */}
              {/* <FilterItem name="Drink" id="2"/> */}
            </div>
          </div>
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)
