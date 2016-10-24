import React, { Component } from 'react'
import {Modal,Button,Input,Row,Col} from 'react-materialize'
import '../../../../assets/scss/info.scss'
export default class ItemInfoModal extends Component {
  addToCart(e){
    e.preventDefault()
    let data = {
      product:"s"
    }
    console.log(this.refs.quantity.state.value);
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
            <Row>
              <Col>
                <span className="flow-text">Quantity : </span>
              </Col>

                <Input type="number" lable="Quantity" ref="quantity" defaultValue={1} s={12} m={1} style={margin  } />
                <Button type="submit" onClick = {(e)=>this.addToCart(e)} >Add to cart</Button>
            </Row>
          </div>
        </div>
      </Modal>
    )
  }
}
