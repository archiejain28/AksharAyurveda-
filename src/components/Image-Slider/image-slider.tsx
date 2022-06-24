import React, {useEffect, useState} from "react";
import '../Image-Slider/image-slider.css';

const image = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.akshar.org%2Fpub%2Fmedia%2Flogo%2Fstores%2F1%2FAksharAyurveda_1.png&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgFzt8f3ResQ%2Fmaxresdefault.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.akshar.org%2Fpub%2Fmedia%2Frevslider%2FCertification-Web-Pg-3.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.akshar.org%2Fpub%2Fmedia%2Frevslider%2Fpurity_comes-first.png&f=1&nofb=1"]

const ImageSlider = () => {

  const [index, setIndex] = useState(0);    

  useEffect(() => {
    const timer = setInterval(() => {
      
      setIndex((i:number)=> {
        console.log(i);
       if(i>= (image.length-1)){
         return i = 0;
      }
      else{
        return i+1;
      }});
    }, 2000);
  
    return () => clearInterval(timer);
  },[]);

  console.log(index);
 return( 
        <div className="slideshow-conatiner">
          <div className="mySlides">
            {/* width 100% tells browser to take  */}
          <img src={image[index]} alt=''style={{"width":"100%","height":"100%"}} ></img> 
          </div>
        </div>
        )
    
}

export default ImageSlider;