"use client";

import axios from "axios";
import { useState } from "react";

export default function Signin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Sign In To Todo App</h1>

            <div className="flex flex-col mt-4">
                <input 
                    className="border rounded p-1 mb-2 outline-none" 
                    type="text" 
                    placeholder="username" 
                    onChange={e => {
                        setUsername(e.target.value);
                    }}    
                />
                <input 
                    className="border rounded p-1 mb-2 outline-none" 
                    type="password" 
                    placeholder="password" 
                    onChange={e => {
                        setPassword(e.target.value);
                    }}    
                />

                <button
                    className="border rounded p-1 cursor-pointer"
                    onClick={() => {
                        axios.post("http://localhost:3000/api/v1/signin", {
                            username,
                            password
                        })
                    }}
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}