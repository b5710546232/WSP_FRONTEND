import React, { Component } from 'react'
import {Modal,Button,Input,Row,Col} from 'react-materialize'
import '../../../../assets/scss/info.scss'
export default class ItemInfoModal extends Component {
  addToCart(){
    let data = {
      product:"s"
    }
  }
  render() {
    var margin = {
      marginTop : "0px",
      marginBottom :"0px"
    }
    return (
      <Modal
        trigger={
          <a>{this.props.price}฿</a>
        }>
        <div>
          <img className="item-preview" src={this.props.image}/>
          <div className="section ">
            <h3>{this.props.name} {this.props.price}฿</h3>
            <p className="flow-text">
              {this.props.description}
            </p>
<<<<<<< HEAD
            <Button onClick = {()=>this.addToCart()} >Add to cart</Button>
=======
            <Row>
              <Col>
                <span className="flow-text">Quantity : </span>
              </Col>
              <Input type="number" lable="Quantity" defaultValue={0} s={12} m={1} style={margin  } />

              <Button>Add to cart</Button>
            </Row>
>>>>>>> 95a1ba0a3d3dadccb4bcee6ce2b14188e2ec2122
          </div>
        </div>
      </Modal>
    )
  }
}
