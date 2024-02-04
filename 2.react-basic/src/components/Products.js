import React from "react";
import ProductItem from './ProductItem';

import './Products.css'


const Products = (props) => {

    return (
        <div className="products">
        <ProductItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            item={props.items[0].item}
        />
        
        <ProductItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            item={props.items[1].item}
        />

        <ProductItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
            item={props.items[2].item}
        />

<ProductItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            item={props.items[3].item}
        />
        </div>
    );
};

export default Products;