
interface PropType {
    type: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ type, placeholder, onChange }: PropType ) {
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            onChange={onChange}
            style={{
                padding: 10,
                margin: 10,
                borderColor: "black",
                borderWidth: 1,
                outline: "none",
                borderRadius: "4px"
            }} 
        ></input>
    ) 
}