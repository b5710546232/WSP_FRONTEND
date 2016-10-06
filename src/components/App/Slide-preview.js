import React,{ Component } from 'react'
import { Carousel } from 'react-bootstrap'


export default class Homepage extends Component {
  render(){
    return(
      <div>
        <Carousel>
         <Carousel.Item>
           <img className="img-responsive center-block" width={600} height={200} alt="500x200" src="src/assets/1.jpg"/>
           <Carousel.Caption>
             <h3>First slide label</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img className="img-responsive center-block" width={600} height={200} alt="500x200" src="src/assets/2.jpg"/>
           <Carousel.Caption>
             <h3>Second slide label</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img className="img-responsive center-block" width={600} height={200} alt="500x200" src="src/assets/3.jpg"/>
           <Carousel.Caption>
             <h3>Third slide label</h3>
             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
           </Carousel.Caption>
         </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
