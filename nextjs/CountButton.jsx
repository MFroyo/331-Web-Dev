import { useState, useEffect} from "react";

export default function CountButton (props) {
    let [count, setCount] = useState(0)
    function handleClick () {
        setCount(count + 1 * props.mult)
    };

    function rollOverCount(){
        if(count > 10) {
            setCount(0)
        }
    };
    useEffect(rollOverCount, [count]);
    return (
        <div>
        <button onClick={handleClick}>{props.name}</button>
        <div>{count}</div>
        </div>
    );
};