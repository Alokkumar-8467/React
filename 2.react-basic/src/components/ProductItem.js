import React, { useState } from "react";


import ProductDate from './ProductDate';
import './ProductItem.css';


const ProductItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [item, setItem] = useState(0);
    
    function  clickHandler(){
        setTitle("ok");
        setAmount("Done");
        setItem(item+1);
        console.log("button clicked");
    }


    return (
        <div>
        <div className="product-item">
            < ProductDate date={props.date}/>
            <h1 className="title">{title}</h1>
            <h1 className="amount">{amount}</h1>
            <h1 className="item">{item}</h1>
            <button className="button" onClick={clickHandler}  >Add to cart</button>
        </div>
        </div>
    );
} 

export default ProductItem;