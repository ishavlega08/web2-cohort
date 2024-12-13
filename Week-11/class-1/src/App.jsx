import { useEffect, useState } from "react";
import { useCounter } from "./hooks/useCounter"
import { useFetch, usePostTitle } from "./hooks/useFetch"
import { usePrev } from "./hooks/usePrev"
import { useDebounce } from "./hooks/useDebounce"

// useDebounce
function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 300);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("expensive operation called");
  }, [debouncedValue])
  
  return (
    <>
      <input type="text" onChange={change} /> <br />
      {debouncedValue}
    </>
  )
}

// usePrev
// function App() {
//   const [count, setCount] = useState(0);
//   const prev = usePrev(count);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => {
//         setCount(c => c+1);
//       }}>Increase</button>
//       <p>Previous value is {prev}</p>
//     </>
//   )
// }

// useFetch
// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);

//   return (
//     <>
//       <button onClick={() => setCurrentPost(1)} >1</button>
//       <button onClick={() => setCurrentPost(2)} >2</button>
//       <button onClick={() => setCurrentPost(3)} >3</button>
//       <br />
//       {loading ? "loading..." : JSON.stringify(finalData)}
//     </>
//   )
// }

function Counter() {
  const {count, increaseCount} = useCounter();

  return <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>
}

export default App
