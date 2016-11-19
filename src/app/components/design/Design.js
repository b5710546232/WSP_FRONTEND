import React, { Component } from 'react'
import ParallaxSection from '../home/section/ParallaxSection'
import * as PIXI from "pixi.js"
import {Button} from "react-materialize"
import SelectBottleModal from './SelectBottleModal'
import SelectLogoModal from './SelectLogoModal'
import SelectBannerModal from './SelectBannerModal'
import {uploadImage} from '../../aws/aws.js'
import {addDesign,loadDesignList} from '../../actions/DesignAction'
import {connect} from 'react-redux'

class Design extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      logo : 'src/assets/images/logo.png',
      bottle: 'src/assets/images/logo.png',
      banner: 'src/assets/images/logo.png'
    }
    //bind our animate function
    this.animate = this.animate.bind(this);
  }
  initRenderer(){
    this.renderer = new PIXI.WebGLRenderer(800, 600, { preserveDrawingBuffer:true });
    this.renderer.backgroundColor = 0xFFEBCD
    // The renderer will create a canvas element for you that you can then insert into the DOM.
    this.refs.canvas.appendChild(this.renderer.view);

  }
  initPIXI(){

    // You need to create a root container that will hold the scene you want to draw.
    this.stage = new PIXI.Container();

    // Declare a global variable for our sprite so that the animate function can access it.
    this.logo =null
    this.bottle=null
    this.banner=null
    let loaders = new PIXI.loaders.Loader();
    let self = this
    loaders
    .add('logo', this.state.logo)
    .add('bottle', this.state.bottle)
    .add('banner', this.state.banner)
    .load(function (loader, resources) {
      // This creates a texture from a 'logo.png' image.
      self.logo = new PIXI.Sprite(resources.logo.texture);
      // Setup the position and scale of the logo
      console.log('weight',$(window).width());
      let locationX = 400
      if ($(window).width()<1000){
        locationX = $(window).width()/2
      }
      self.logo.position.x = locationX;
      self.logo.position.y = 100;
      self.logo.anchor.set(0.5);
      self.logo.scale.set(0.5);
      self.logo.interactive = true;
      self.logo.buttonMode = true;
      self.logo// events for drag start
      .on('mousedown', self.onDragStart)
      .on('touchstart', self.onDragStart)
      // events for drag end
      .on('mouseup', self.onDragEnd)
      .on('mouseupoutside', self.onDragEnd)
      .on('touchend', self.onDragEnd)
      .on('touchendoutside', self.onDragEnd)
      // events for drag move
      .on('mousemove', self.onDragMove)
      .on('touchmove', self.onDragMove);

      self.bottle = new PIXI.Sprite(resources.bottle.texture);
      self.bottle.position.x = 0;
      self.bottle.position.y = 0;
      self.bottle.anchor.set(0.5);
      self.bottle.scale.set(0.5);

      self.banner = new PIXI.Sprite(resources.banner.texture);
      self.banner.position.x = 100;
      self.banner.position.y = 100;
      self.banner.anchor.set(0.5);
      self.banner.scale.set(0.5);
      // Add the logo to the scene we are building.
      self.stage.addChild(self.bottle);
      self.stage.addChild(self.banner)
      self.stage.addChild(self.logo);

      // kick off the animation loop (defined below)
      self.animate();

    });
  }
  setLogo(logo){
    console.log("Set Logo");
  }
  setBottle(bottle){
    console.log("Set "+bottle);
    this.setState({bottle:bottle})
  }
  setBanner(banner){
    console.log("Set banner");
  }
  componentDidMount(){
    this.props.loadDesignList(localStorage.token)
    this.initRenderer()
    this.initPIXI()
    let self = this
    $(window).on('resize', function(){
      console.log('resizeing');
      self.initPIXI()
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.state!=nextState
  }
  componentDidUpdate(){
    this.initPIXI()
  }
  animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(this.animate);

    // this is the main render call that makes pixi draw your container and its children.
    this.renderer.render(this.stage);
  }
  onDragStart(event)
  {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
  }

  onDragEnd()
  {
    this.alpha = 1;

    this.dragging = false;

    // set the interaction data to null
    this.data = null;
  }

  onDragMove()
  {
    if (this.dragging)
    {
      var newPosition = this.data.getLocalPosition(this.parent);
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    }
  }
  onSave(e){
    e.preventDefault()
    let image = this.renderer.view.toDataURL("image/png")
    let blobBin = atob(image.split(',')[1]);
    let array = [];
    for(let i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    let file=new Blob([new Uint8Array(array)], {type: 'image/png'});
    console.log(this.props);
    let path = "design-"+localStorage.token+'-'+(this.props.design.length+1)+".png"
    uploadImage(path,file)
    let data = {
      name : this.props.design.length+1,
      description : "-",
      image : path
    }
    this.props.addDesign(data,localStorage.token)
  }
  render() {
    let canvasStyle={
      width:"800px",
      height:"600px"
    }
    let buttonStyle={
      margin:"2px"
    }
    return (
      <ParallaxSection
        background="src/assets/media/images/2.jpg"
        height="900px"
      >
        <div className="container center">
          <div className="row"><h1 className="light condensed white-text">Explose your Imagination</h1></div>
          <div className="row" ref="canvas">
          </div>
          <div className="row" style={buttonStyle}>
            <Button onClick={(e)=>this.onSave(e)}>Save</Button>
          </div>
          <div className="row" style={buttonStyle}>
            <Button>View Saved Design</Button>
          </div>
          <div className="row" style={buttonStyle}>
            <SelectBottleModal
              selectBottle = {this.setBottle.bind(this)}
            />
            <SelectLogoModal
              selectLogo = {this.setLogo.bind(this)}
            />
            <SelectBannerModal
              selectBanner = {this.setBanner.bind(this)}
              />
          </div>
        </div>
      </ParallaxSection>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    addDesign: (data,token) => (
      dispatch(addDesign(data,token))
    ),
    loadDesignList: (token) =>(
      dispatch(loadDesignList(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Design)
