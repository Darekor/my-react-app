import React,{useState} from "react"

function Counter(){
    let [num, setNum] = useState(0);

    function increment(){
        setNum(num+1);
    }

    function decrement(){
        setNum(num-1);
    }

    function reset(){
        setNum(0);
    }

    return(
        <div className="counter-container">
            <p className="count">{num}</p>
            <button className="action-button" onClick={decrement}>Decrease</button>
            <button className="action-button" onClick={reset}>Reset</button>
            <button className="action-button" onClick={increment}>Increase</button>
        </div>
    )
    
}

export default Counter

