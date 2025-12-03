import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const setNull = () => setCount(0);
  const [inputCount, setInputCount] = useState(0)
  return (
    <div className="bg-amber-100 h-1/3 w-1/3  ">
      <div className="ml-40 font-semibold text-4xl">Counter</div>
      <div className="font-bold text-5xl ml-50 mb-6 ">
        <div>
          <div className="font-bold text-5xl">{count}</div>
        </div>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="ml-5">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={setNull}>Set 0</button>
        </div>
        <div >
            <input onChange={(e)=>setInputCount(e.target.value)} type="text" className="p-5 ml-5 border-2" placeholder="enter" />
            <button onClick={()=>setCount(inputCount)}>set {inputCount}</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
