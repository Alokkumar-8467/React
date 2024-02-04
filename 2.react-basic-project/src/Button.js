import React, { useState } from "react";


function Button(){

    const [count, setCount] = useState(0);

    function clickHandler (){
        clickHandler1();
        clickHandler2();
    }

    function clickHandler1(){
        setCount(count-1);
    }

    function clickHandler2(){
        setCount(count+1);
    }

    function clickHandler3(){
        setCount(0);
    }
        return (
            <div>
            <div className=" flex justify-center items-center flex-col gap-10">
            <h2 className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</h2>
            <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
                <button onClick ={clickHandler1} className="border-r-2 text-center w-20 border-[#bfbfbf] text-3xl">Dec </button>
                <div className="font-bold gap-12 text-5xl">{count}</div> 
                <button onClick ={clickHandler2} className="border-l-2 text-center w-20 border-[#bfbfbf] text-3xl">Inc </button>
            </div>
            <div>
                <button onClick ={clickHandler3} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg ">Reset</button>
            </div>
            </div>
            </div>
        )
    };


export default Button;