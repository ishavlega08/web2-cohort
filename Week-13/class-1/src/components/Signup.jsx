import { useState } from "react";
import { Button } from "./Button"
import { Input } from "./Input"
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen bg-blue-700 flex flex-col justify-center items-center">
            
                <h1 className="text-white text-3xl font-semibold">Let&apos;s Get Started</h1>
        
                <div className="mt-14">
                    <Input onChange={(e) => {
                        {e.target.value != null ? setDisable(false) : null};
                    }} type={"text"} placeholder={"Email Id"} />
                </div>
                <div className="mt-8">
                    <Button onClick={() => {
                        navigate("/otp")
                    }} disabled={disable}>Continue</Button>
                </div>
            </div>
        </>
    )
}