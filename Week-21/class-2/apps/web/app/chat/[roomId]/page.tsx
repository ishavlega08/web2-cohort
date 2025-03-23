import { TextInput } from "@repo/ui/text-input";

export default function Chat() {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div style={{
                margin: 10
            }}>
                chat room
            </div>
            <div style={{
                margin: 10
            }}>
                <TextInput 
                    type="text"
                    placeholder="message"
                />
            </div>
        </div>
    )
}