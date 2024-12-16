import { Button } from "./components/Button"
import { Input } from "./components/Input"

function App() {

  return (
    <>
      <div className="h-screen bg-blue-700 flex flex-col justify-center items-center">
        <div>
          <Input type={"text"} placeholder={"Email"} />
        </div>
        <div className="mt-8">
          <Button color={"bg-blue-500"}>Sign up</Button>
        </div>
      </div>
    </>
  )
}

export default App
