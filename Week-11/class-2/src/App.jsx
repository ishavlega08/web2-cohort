import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import { evenSelector } from "./store/selectors/isEven";

function App() {

  return (
    <>
      <RecoilRoot>
        <Buttons /> 
        <Counter />
        <IsEven />
      </RecoilRoot>  
    </>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount(c => c + 2)}>
        Increase
      </button>
      <button onClick={() => setCount(c => c - 1)}>
        Decrease
      </button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return (
    <div>
      Count {count}
    </div>
  )
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      Count is {isEven ? "even" : "odd"}
    </div>
  )
}

/*
  React says
  Anytime a component re-renders all its children also re-render

  But if you wrap a component inside a memo => memo(fn)
  Only if the props/state in that child has changed
  Only then will it re-render
*/ 

// function App() {

//   return (
//     <>
//       <Counter />
//     </>
//   )
// }

// function Counter() {
//   return (
//     <>
//       <RecoilRoot>
//         <Increase />
//         <Decrease /> 
//         <br />
//         <Value />
//       </RecoilRoot>
//     </>
//   )
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   return (
//     <>
//       <button onClick={() => {
//         setCount(c => c + 1)
//       }}>Increase</button>
//     </>
//   )
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);

//   return (
//     <>
//       <button onClick={() => {
//         setCount(c => c - 1)
//       }}>Decrease</button>
//     </>
//   )
// }

// function Value() {
//   const count = useRecoilValue(counterAtom);

//   return (
//     <>
//       <div>
//         Count {count}
//       </div>  
//     </>
//   )
// }

export default App
