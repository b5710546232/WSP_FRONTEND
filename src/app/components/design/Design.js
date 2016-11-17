import React, { Component } from 'react'
import ParallaxSection from '../home/section/ParallaxSection'
import {PIXI} from 'pixi'
export default class Design extends Component {
  initPixi(){
    let renderer = PIXI.autoDetectRenderer(800, 600,document.getElementById('design-canvas'))
    renderer.backgroundColor = 0x000000;

    // create the root of the scene graph
    var stage = new PIXI.Container();

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage('required/assets/basics/bunny.png');

    // create a new Sprite using the texture
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
  }
  render() {
    let canvasStyle={
      width:"800px",
      height:"600px"
    }
    return (
      <ParallaxSection
        background="src/assets/media/images/2.jpg">
        <div className="container">
          <canvas id="design-canvas" style={canvasStyle}></canvas>
        </div>
      </ParallaxSection>
    )
  }
}
