import React, { useState } from "react";
import './ProductForm.css'



function ProductForm(props){

    const [newTitle, setTitle] = useState("");
    const [newDate, setDate] = useState("");

function titleChangeHandle(event) {
    setTitle(event.target.value);
}

function dateChangeHandle(event) {
    setDate(event.target.value);
}

function submitHandler(event) {
    event.preventDefault();

    const productData ={
        title:newTitle,
        date:newDate
    };
    // console.log(productDate);
    
    // here we call onSaveproduct

    props.onSaveProduct(productData);

    setTitle('');
    setDate('');
}

    return(
        <form onSubmit={submitHandler}>
        <div className="new-product_controls">
            <div className="new-product_control">
                <label>Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandle}></input>
            </div>
            <div className="new-product_control">
                <label>Date</label>
                <input type="date" value={newDate} onChange={dateChangeHandle} min="2024-01-02" max="2024-12-12"></input>
            </div>
            <div>
                <button className="new-product_button" type="submit">Add Product</button>
            </div>
        </div>
        </form>
    );
}

export default ProductForm;