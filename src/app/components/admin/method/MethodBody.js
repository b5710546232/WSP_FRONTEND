import React, { Component } from 'react'
import {connect} from 'react-redux'
import MethodEditForm from './MethodEditForm'
import {deactiveMethod,reactiveMethod} from '../../../actions/AdminAction'

class MethodBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.method!==nextProps
  }
  deactiveMethod(e,id){
    e.preventDefault()
    this.props.deactiveMethod(id,localStorage.token)
  }
  reactiveMethod(e,id){
    e.preventDefault()
    this.props.reactiveMethod(id,localStorage.token)
  }
  render() {
    // console.log('method',this.props.admin.method);
    return(
      <li>
        <div className="collapsible-header">Payment Method</div>
        <div className="collapsible-body white">
          <table className="table-responsive">
            <thead>
              <tr>
                  <th data-field="id">ID</th>
                  <th data-field="name">Payment Method</th>
                  <th data-field="is_active">Is Active</th>
                  <th data-field="add"><MethodEditForm add={true}/></th>
              </tr>
            </thead>
            <tbody>
              {this.props.admin.method.map(
                (method)=>(
                    <tr>
                      <td>{method.id}</td>
                      <td>{method.name}</td>
                      <td>{method.is_active? <i onClick={(e)=>this.deactiveMethod(e,method.id)} className="material-icons done-icon">done</i> : <i onClick={(e)=>this.reactiveMethod(e,method.id)} className="material-icons clear-icon">clear</i>}</td>
                      <td><MethodEditForm select_method={method}/></td>
                    </tr>
                )
              )}
            </tbody>
          </table>
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
    deactiveMethod: (id,token)=>(
      dispatch(deactiveMethod(id,token))
    ),
    reactiveMethod: (id,token)=>(
      dispatch(reactiveMethod(id,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MethodBody)
