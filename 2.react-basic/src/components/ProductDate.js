import React from "react";

import './ProductDate.css';


const ProductDate = (props) => {
    const mfgdate = props.date;
    return (
        <div>
            <div className="Product-date-month"><h3>{mfgdate}</h3></div>
        </div>
    );
};

export default ProductDate;