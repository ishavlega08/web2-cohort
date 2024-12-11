import { useRef, useState } from "react"

// useRef
// reference to the value, such that when you change the value, the component DOES NOT RE-RENDER

// a clock with a start and stop button
function App1() {
    const [currentCount, setCurrentCount] = useState(1);
    const timer = useRef();

    function startClock() {
        const value = setInterval(() => {
            setCurrentCount(c => c + 1);
        }, 1000);
        timer.current = value;
    }

    function stopClock() {
        clearInterval(timer.current);
    }

    return <div>
        {currentCount}
        <br />
        <button onClick={startClock} >Start</button>
        <button onClick={stopClock} >Stop</button>
    </div>
}

// function App1() {
//     const inputRef = useRef();

//     function focusInput() {
//         // document.getElementById("name");
//         inputRef.current.focus();
//     }

//     return <div>
//         Sign up 
//         <br />
//         <input ref={inputRef} type="text" /> <br />
//         <input type="text" /> <br />
//         <button onClick={focusInput}>Submit</button>
//     </div>
// }

export default App1