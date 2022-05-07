import React, { Component} from 'react';
import './navbar.css';

interface myState {
    fixed: boolean
}


export default class Navbar extends Component<{},myState>{
    constructor(props:any){
        super(props)
        this.state = {
            fixed: false
        }    
        this.scroll = this.scroll.bind(this);
        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll(e:any){
        let container:any = document.querySelector('.container')
        let heading:any = document.querySelector('.main-box')?.firstChild
         // 50 is offsetTop of the conatainer.
         
         if(window.scrollY >= 50 ){
            container.classList.add('fixed-nav');
            heading.classList.add('heading')
         } 

         else{
            container.classList.remove('fixed-nav');
            heading.classList.remove('heading')
         } 
        }
              

    render(){
        return(
        <header className='main-box'>
           <div>Ayurvedic Products</div> 
         <div className='container' >
           <div className='logo-img'><img src='https://aksharayurved.com/assets/frontend/images/logo.jpg' alt=""></img></div>
           <ul className='list-container'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Price List</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
         </div>
        </header>
        );
    }
}