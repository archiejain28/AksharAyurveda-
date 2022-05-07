import React, {Component} from 'react';
import Navbar from '../navbar/navbar';
import ImageSlider from '../Image-Slider/image-slider';


export default class Header extends Component{
    render(){
        return<>
        <Navbar />
        <ImageSlider />
        </>
    }
}