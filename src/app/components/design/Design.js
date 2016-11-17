import React, { Component } from 'react'
import ParallaxSection from '../home/section/ParallaxSection'
// import PIXI from 'pixi'
export default class Design extends Component {
  constructor(){
    super()
    this.state = {
      loaded:false
    }
  }
  componentWillUpdate(){

  }
  initPixi(){
    console.log('pixi','created');
    let renderer = PIXI.autoDetectRenderer(800, 600)
    renderer.backgroundColor = 	0xb0bdd2
    document.getElementById('design-container').appendChild(renderer.view)
    // create the root of the scene graph
    var stage =  new PIXI.Container();

    console.log('loaded init',this.state.loaded);
    // var loader = PIXI.loader; // pixi exposes a premade instance for you to use.
    // // //or
    // var loader = new PIXI.loaders.Loader(); // you can also create your own if you want
    // //
    // loader.add('bunny',"required/logo.png");
    // //
    // loader.once('complete',()=>{
    //   console.log('loaded',this.state.loaded);
    //   this.setState({loaded:true})
    // });
    //


    // create a texture from an image path
    // create a new Sprite using the texture
    var texture = new PIXI.Texture.fromImage("bunny");
    let bunny = new PIXI.Sprite(texture);
    console.log('pixi',texture);

    // center the sprite's anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
    bunny.interactive = true;

   bunny.buttonMode = true;


    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;
    bunny.on('mousedown', this.onDragStart)
        .on('touchstart', this.onDragStart)
        // events for drag end
        .on('mouseup', this.onDragEnd)
        .on('mouseupoutside', this.onDragEnd)
        .on('touchend', this.onDragEnd)
        .on('touchendoutside', this.onDragEnd)
        // events for drag move
        .on('mousemove', this.onDragMove)
        .on('touchmove', this.onDragMove);

    stage.addChild(bunny);
    renderer.render(stage)
  }

  animate() {

    // requestAnimationFrame(animate);
    // render the stage
    this.forceUpdate()
    renderer.render(stage);
  }
  onDragStart(event){
    console.log('drag');
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
      console.log('move');
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}
  shouldComponentUpdate(nextProps,nextState){
    return nextProps!==this.props
  }
  componentDidMount(){

    var loader = PIXI.loader; // pixi exposes a premade instance for you to use.
    // //or
    var loader = new PIXI.loaders.Loader(); // you can also create your own if you want
    //
    loader.add('bunny',"required/logo.png");
    //
    loader.once('complete',()=>{
      console.log('loaded',this.state.loaded);
      this.setState({loaded:true})
      this.initPixi()
    });
    loader.load();
  }
  componetnWillUpdate(){
    this.initPixi()
  }
  render() {
    let canvasStyle={
      width:"800px",
      height:"600px"
    }
    requestAnimationFrame( this.animate )
    return (
      <ParallaxSection
        background="src/assets/media/images/2.jpg">
        <div id="design-container" className="container">
          {/* <canvas id="design-canvas" style={canvasStyle}></canvas> */}
        </div>
      </ParallaxSection>
    )
  }
}
