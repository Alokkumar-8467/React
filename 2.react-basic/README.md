

# useState
its take one initialise value and in return or output it give two things
one is value of the variable and another is a function for updating the value.

Syntax: const [title, setTitle] = useState (props.title);

In props.title we pass the variable,
And in const [ title, setTitle]

title return the actual value which we pass but setTitle pass the updated value which we can change in our code.

Suppose we want to change the title value from maggi to popcorn 
So, we not change that value in title = popcorn it not show any changes.
But if we change in setTitle =( Popcorn ) then it changes.
 
We can use this to update and make changes.


# How to use count item with calling in another function.

```
import React, { useState } from "react";


import ProductDate from './ProductDate';
import './ProductItem.css';


const ProductItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [item, setItem] = useState(0);

    function clickHandler() {
        clickHandler1();
        clickHandler2();
     }
    function  clickHandler1(){
        setTitle("ok");
        setAmount("Done");
        setItem(item+1);
        console.log("button clicked");
    }

    function  clickHandler2(){
        setItem(item+1);
    }


    return (
        <div>
        <div className="product-item">
            < ProductDate date={props.date}/>
            <h1 className="title">{title}</h1>
            <h1 className="amount">{amount}</h1>
            <h1 className="item">{item}</h1>
            <button className="button" onClick={function(clickHandler) { clickHandler1(); clickHandler2()}}  >Add to cart</button>
        </div>
        </div>
    );
} 

export default ProductItem;
```

# How to use count item without calling in another function

```
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

```


# How to make + - button

```
import React, { useState } from "react";
import ProductItem from './ProductItem';

import './Products.css'


const Products = (props) => {

    return (
        <div>
        <div>
            <button title="-start" onClick ={clickHandler1}>Dec </button>
                {count}
            <button title="+start" onClick ={clickHandler2}>Inc </button>
        </div>
        </div>
        
    );
};

export default Products;
```
# How to use onChange in react

```
function titleChangeHandle(event) {
    console.log(event.target.value);
}

<input type="text" onChange={titleChangeHandler}></input>

```

# weare handling various states line by line like this 

```

function ProductForm()

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

function titleChangeHandle(event) {
    setTitle(event.target.value);
}

function dateChangeHandle(event) {
    setDate(event.target.value);
    console.log(title);
    console.log(date);
}
```
And after that we declare there function.

# Now we can handle more states at one time
 so  for multifunction we can pass it into object like this,

```

```

we use prevent.default function in button to prevent the default function of button.
It prevent our input date from deleting when we click on button

then use 
```
setTime('');
setTDate('');

```
So, when we enter the input and after submit it auto erease from input

#### Now we have to things:

###### one is we pass properties from parent to child by using props,


###### And second is we pass properties from child to parent by using props.


