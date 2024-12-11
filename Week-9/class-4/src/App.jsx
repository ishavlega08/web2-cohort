import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <div style={{background: "red", borderRadius: 20, padding: 10, margin: 10, color: "white"}}>
          Something went wrong
        </div>
      }

      return this.props.children; 
  }
}

function App() {
  return <>
    <ErrorBoundary>
      <Card1 />
    </ErrorBoundary>
    <ErrorBoundary>
      <Card2 />
    </ErrorBoundary>
  </>
}

function Card1() {
  throw new Error("Error while rendering");

  return <div style={{background: "black", borderRadius: 20, padding: 10, margin: 10, color: "white"}}>
    hi there
  </div>
}

function Card2() {
  // throw new Error("Error while rendering");

  return <div style={{background: "black", borderRadius: 20, padding: 10, margin: 10, color: "white"}}>
    hello
  </div>
}

export default App;

// function App() {

//   return (
//     <div style={{display: "flex"}}>
//       <Card>
//         <div style={{color: "yellow"}}>
//           What do you want to post <br /><br />
//           <input type="text" />
//         </div>
//       </Card>
//       <Card>
//         <div>hi there</div>
//       </Card>
//     </div>
//   )
// }

// function Card({ children }) {
//   return (
//     <div style={{background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
//       {children}
//     </div>
//   );
// }

// export default App
