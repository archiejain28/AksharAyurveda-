import React, { Component } from "react";
import './card-item.css';

interface ProductsProps{
    key: number,
    items: {
        id: string;
        title: string;
        image: string;
        price: number;
        description: string;
    }
}

export default class CardItem extends Component<ProductsProps>{
    
    render(){
        const {id,title,image,price,description} = this.props.items
        
        return (
              <div className="cardItem">
                 <img src={image} alt=''/>
                 <h2>{title}</h2>
                 <h2>₹{price}</h2>
              </div>
        )
    }
}