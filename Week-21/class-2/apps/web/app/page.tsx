"use client";

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <TextInput 
          type={"text"} 
          placeholder={"Room name"}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        />
        <button onClick={() => {
          router.push(`/chat/${roomId}`);
        }}>
          Join Room
        </button>
      </div>
    </div>
  );
}
