import React from 'react';
import { Slide } from 'react-slideshow-image';
 

const slideImages = [
  'https://picsum.photos/id/10/1800/300',
  'https://picsum.photos/id/1020/1800/300',
  'https://picsum.photos/id/1011/1800/300'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
function Slideshow(){
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`, height:300}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`, height:300}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`, height:300}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    );
}

export default Slideshow;