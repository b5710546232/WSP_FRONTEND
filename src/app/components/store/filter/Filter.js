import React, { Component } from 'react'
import FilterItem from '../filteritem/FilterItem'
import '../../../../assets/scss/filter.scss'
import {loadCategoryList} from '../../../actions/CategoryAction'
import {addFilter,removeFilter} from '../../../actions/FilterAction'
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
                  check ={category.checked}
                  {...category}
                  />)
              )}
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
    },
    addFilter: (filters) => {
      dispatch(addFilter(filters))
    },
    removeFilter: (filters) => {
      dispatch(removeFilter(filters))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)
