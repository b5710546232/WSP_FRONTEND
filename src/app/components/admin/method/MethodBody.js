import React, { Component } from 'react'
import {connect} from 'react-redux'

class MethodBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  render() {
    return(
      <li>
        <div className="collapsible-header">Payment Method</div>
        <div className="collapsible-body white">
          <table>
            <thead>
              <tr>
                  <th data-field="id">ID</th>
                  <th data-field="name">Payment Method Name</th>
                  <th data-field="is_active">Is Active</th>
                  <th data-field="edit">Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.props.admin.method.map(
                (method)=>{
                    <tr>
                      <td>method.id</td>
                      <td>method.name</td>
                      <td>{method.is_active? <a>Active</a>:<a claasName="red-text">Disable</a>}</td>
                      <td><li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li></td>
                    </tr>
                }
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

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MethodBody)
