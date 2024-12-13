import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

// function useDebounce(originalFn) {
//     const currentClock = useRef();

//     const fn = () => {
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalFn, 200);
//     }

//     return fn;
// }