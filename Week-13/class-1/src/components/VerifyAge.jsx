import { useNavigate } from "react-router-dom";
import { Input } from "./Input"
import { Button } from "./Button"
import { useState } from "react"

export const VerifyYourAge = () => {
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen bg-blue-700 flex flex-col justify-center items-center">

                <h1 className="text-white text-3xl font-semibold">Verify Your Age</h1>

                <p className="text-gray-500 mt-14">Please confirm your birth year. This data will not be stored.</p>

                <div className="mt-4">
                    <Input onChange={(e) => {
                        {e.target.value != null ? setDisable(false) : null};
                    }} type={"text"} placeholder={"Your Birth Year"} />
                </div>
                <div className="mt-8">
                    <Button onClick={() => {
                        navigate("/signup")
                    }} disabled={disable}>Continue</Button>
                </div>
            </div>
        </>
    )
}