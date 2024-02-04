import React from "react";

import Products from './components/Products';
import NewProduct from "./components/NewProduct";

const App = () => {

  const products = [
    {
      id: 'p1',
      title: "Maggi",
      amount: 54,
      date: "02/01/2024",
      item: "0"
    },
    {
      id: 'p2',
      title: "Chings",
      amount: 50,
      date: "24/01/2024",
      item: "0"
    },
    {
     id: 'p3',
      title: "Salt",
      amount: 44,
      date: "20/01/2024",
      item: "0"
    },
    {
      id: 'p4',
       title: "Sugar",
       amount: 40,
       date: "25/01/2024",
       item: "0"
     } 
  ];

  function printProductData(data){
    console.log("I am inside App.js");
    console.log(data);
  }

  return (
    <div> 
      < NewProduct addedproduct = {printProductData}/>
      < Products items={products}/>  
    </div>
  );
}

export default App;
