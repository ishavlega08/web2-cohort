import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Otp = ({ number }) => {
    const ref = useRef(Array(number).fill(0));

    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen bg-blue-700 flex flex-col justify-center items-center">

                <h1 className="text-white text-3xl font-semibold">Check Your Email For A Code</h1>

                <p className="text-gray-500 mt-14">Please enter the verification code sent to your email id</p>

                <div className="mt-4 flex">
                    {Array(number).fill(1).map((x, index) => <SubOtpBox reference={e => ref.current[index] = e} key={index} onDone={() => {
                        if(index + 1 >= number) {
                            return
                        }

                        ref.current[index + 1].focus();
                    }} goBack={() => {
                        if(index == 0) {
                            return
                        }

                        ref.current[index - 1].focus();
                    }} setDisable={setDisable} />)}
                </div>

                <div className="mt-8">
                    <Button onClick={() => {
                        navigate("/dashboard")
                    }} disabled={disable}>Verify</Button>
                </div>

                <p className="text-gray-500 mt-1">Can&apos;t find the email? Click <Link className="underline text-gray-400">here</Link> to resend</p>
            </div>
        </>
    )
}

function SubOtpBox({
    reference, onDone, goBack, setDisable
}) {
    const [inputBoxVal, setInputBoxVal] = useState("");

    return (
        <>
            <input value={inputBoxVal} ref={reference} onKeyUp={(e) => {
                if(e.key == "Backspace") {
                    goBack();
                }
            }} onChange={(e) => {
                const val = e.target.value

                if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val  == "9") {
                    setInputBoxVal(val);
                    onDone();
                }

                {e.target.value != null ? setDisable(false) : null};
            }} type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white" />
        </>
    )
}