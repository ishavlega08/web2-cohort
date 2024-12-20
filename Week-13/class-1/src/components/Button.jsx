
export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <div onClick={onClick} className={`cursor-pointer text-white w-80 h-11 text-center pt-2 rounded-lg text-lg ${disabled ? "bg-blue-500" : "bg-green-400"}`}>
        {children}
    </div>
}