import React, {useState} from "react";
import classes from './counter.module.css';
const Counter = function() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }

    return(
        <div className={classes.flex}>
                <h1 className={classes.counterh1}>{count}</h1>
                <img className={classes.counterLike} onClick={increment} src="https://cdn-icons-png.flaticon.com/512/415/415451.png"/>
                <img className={classes.counterLike} onClick={decrement} src="https://cdn-icons-png.flaticon.com/512/880/880613.png"/>
        </div>
    )
    
}


export default Counter;