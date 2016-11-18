import React, { Component } from 'react'
import ParallaxSection from '../home/section/ParallaxSection'
import * as PIXI from "pixi.js"
import {Button} from "react-materialize"
export default class Design extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      isLoad : false
    }
    //bind our animate function
    this.animate = this.animate.bind(this);
  }
  initRenderer(){
    this.renderer = new PIXI.WebGLRenderer(800, 600);

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
    console.log('state',this.state);
    loaders
    .add('logo', 'src/assets/images/logo.png')
    .add('bottle', 'src/assets/images/logo.png')
    .add('banner', 'src/assets/images/logo.png')
    .load(function (loader, resources) {
      // This creates a texture from a 'logo.png' image.
      self.logo = new PIXI.Sprite(resources.logo.texture);
      // Setup the position and scale of the logo
      console.log('weight',$(window).width());
      let locationX = 400
      if ($(window).width()<800){
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
      self.stage.addChild(self.logo);
      self.stage.addChild(self.bottle);
      self.stage.addChild(self.banner)
      // kick off the animation loop (defined below)
      self.animate();

    });
    this.setState({
      isLoad:true
    })
  }
  componentDidMount(){
    this.initRenderer()
    this.initPIXI()
    this.setState({
      isLoad:true
    })
    let self = this
    $(window).on('resize', function(){
      console.log('resizeing');
      self.initPIXI()
    })
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
          <div className="row">
            <Button style={buttonStyle}>Select Bottle Type</Button>
            <Button  style={buttonStyle}>Upload Your Logo</Button>
            <Button  style={buttonStyle}>Select Bottle Label</Button>
          </div>
        </div>
      </ParallaxSection>
    )
  }
}
