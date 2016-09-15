// // ui/components/App/Header.js
// import React, { Component } from 'react'
// import Input from './Input'
// // import 'jquery'
// // import 'bootstrap-sass'
// // import Button from './Button'
//
// export default class Login extends Component {
//   render() {
//     return (
//       <div className="Modal">
//         <label>Login</label>
//         <form
//           onSubmit="{this.props.onSubmit}"
//           className="ModalForm">
//           <div className="inputContainerID Input">
//             <div className="row">
//                 <div className="col-md-2">
//                   <span className="glyphicon glyphicon-user"></span>
//                 </div>
//                 <div className="col-md-8">
//                   <Input
//                     id="name"
//                     type="text"
//                     placeholder="username" />
//                 </div>
//             </div>
//           </div>
//           <div className="inputContainerPass row">
//             <Input
//               id="password"
//               type="password"
//               placeholder="password" />
//             <button className="btn btn-info">
//               Log in <i className="fa fa-fw fa-chevron-right"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
// }
// ui/components/App/Header.js
import React, { Component } from 'react'
import Input from './Input'
// import 'jquery'
// import 'bootstrap-sass'
// import Button from './Button'

export default class Login extends Component {
  render() {
    return (
      <div className="Modal">
        <label>Login</label>
        <form
          onSubmit="{this.props.onSubmit}"
          className="ModalForm">
          <div className="inputContainerID Input">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                  <Input
                    id="name"
                    type="text"
                    placeholder="username" />
                </div>
            </div>
          </div>
          <div className="inputContainerPass row">
            <Input
              id="password"
              type="password"
              placeholder="password" />
            <button className="btn btn-info">
              Log in <i className="fa fa-fw fa-chevron-right"></i>
          </button>
        </div>
      </form>
    </div>
  )
}
}
