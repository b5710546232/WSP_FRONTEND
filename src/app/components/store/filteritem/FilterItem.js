import React, { Component } from 'react'
import {Input} from 'react-materialize'
import '../../../../assets/scss/filter.scss'
import {connect} from 'react-redux'
import {addFilter,removeFilter} from '../../../actions/FilterAction'

class FilterItem extends Component {
  constructor(props){
    super(props)
    this.props.addFilter(this.props.id)
  }
  boxClick(){
    let checked = $('#checkbox'+this.props.id).prop('checked')
    if(checked){
      this.props.addFilter(this.props.id)
    }
    else{
      this.props.removeFilter(this.props.id)
    }
  }
  render() {
    return (
        <Input  name='category'
                id={'checkbox'+this.props.id}
                type='checkbox' value={this.props.id}
                checked={this.props.filters.includes(this.props.id)}
                onClick={(e)=>this.boxClick(e)}
                label={this.props.name} />
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFilter: (filters) => {
      dispatch(addFilter(filters))
    },
    removeFilter: (filters) => {
      dispatch(removeFilter(filters))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterItem)
