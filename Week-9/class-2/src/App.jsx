import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(c => c + 1);
  }

  function decrease() {
    setCount2(c => c - 1);
  }

  return <div>
    <Counter count={count} count2={count2} />
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>
}

// mounting, re-rendering, unmounting
function Counter(props) {

  useEffect(function() {
    console.log("mount");

    return function() {
      console.log("unmount");
    }
  }, []);

  useEffect(function() {
    console.log("count has changed");
  }, [props.count]);

  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2}
  </div>
}

export default App
