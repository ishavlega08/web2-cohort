
export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <div onClick={onClick} className={`cursor-pointer text-white w-72 h-11 pt-2 rounded-lg bg-blue-200`}>
        <input type={type} placeholder={placeholder} className="bg-blue-200 outline-none px-2 w-full text-lg" />
    </div>
}