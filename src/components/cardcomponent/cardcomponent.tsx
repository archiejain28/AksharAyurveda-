import React, { Component } from "react";
import products from '../../card.config.json';
import CardItem from '../card-item/card-item';



export default class Cardcomponent extends Component{
    render() {
     return (
         <>
    <h1 style={{"margin":"20px 0 0 20px","padding":"20px 0 0 20px"}}>Top Deals</h1>
         {products.map((item:any) => {
                  return <CardItem key = {item.id} items={item} />
                }
           )}
        </>
        )
        
    }

}