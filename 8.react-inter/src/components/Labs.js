import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/about");
  }
  function backkHandler(){
    navigate(-1);
  }
  return (
    <div>
    <div>This is Labs page</div>
    <button onClick={clickHandler}>Move to About page</button>
    <button onClick={backkHandler}>Back Page</button>
    </div>
  )
}

export default Labs;