import React, { Component } from 'react'
import ParallaxSection from '../home/section/ParallaxSection'
// import PIXI from 'pixi'
export default class Design extends Component {
  initPixi(){
    console.log('pixi','created');
    let renderer = PIXI.autoDetectRenderer(800, 600)
    renderer.backgroundColor = 	0xb0bdd2
    document.getElementById('design-container').appendChild(renderer.view)
    // create the root of the scene graph
    var stage =  new PIXI.Container();

    // create a texture from an image path

    // create a new Sprite using the texture
    if(!texture){
      var texture = PIXI.Texture.fromImage("required/logo.png");
    }
    var bunny = new PIXI.Sprite(texture);

    // center the sprite's anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);
    renderer.render(stage)
  }
  componentDidMount(){

    this.initPixi()
    this.forceUpdate()
  }
  render() {
    let canvasStyle={
      width:"800px",
      height:"600px"
    }
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
