import { BrowserRouter, Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="*" element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout() {
  return <div style={{height: "100vh", background: "yellow"}}>
      <Header />
      <div style={{height: "90vh", background: "grey"}}>
        <Outlet />
      </div>
      Footer
  </div>
}

function Header() {
  return <div>
    <Link to={"/"}>Allen</Link> 
    | 
    <Link to={"/neet/online-coaching-class-11"}>Class 11</Link> 
    | 
    <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
  </div>
}

function Landing() {
  return <div>
    Welcome to Allen
  </div>
}

function ErrorPage() {
  return <div>
    Sorry page not found
  </div>
}

function Class11Program() {
  return <div>
    Neet programs for Class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div>
    Neet programs for Class 12th <br />
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

export default App
