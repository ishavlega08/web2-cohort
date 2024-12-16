
export const Button = ({
    children,
    color,
    onClick
}) => {
    return <div onClick={onClick} className={`cursor-pointer text-white w-72 h-11 text-center pt-2 rounded-lg text-lg ${color}`}>
        {children}
    </div>
}