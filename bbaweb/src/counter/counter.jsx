import { useState } from "react"
import "./counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}