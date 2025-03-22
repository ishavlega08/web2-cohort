
interface PropType {
    type: string;
    placeholder: string;
}

export function TextInput({ type, placeholder }: PropType ) {
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            style={{
                padding: 10,
                margin: 10,
                borderColor: "black",
                borderWidth: 1,
                outline: "none"
            }} 
        ></input>
    ) 
}