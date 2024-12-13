import { useEffect, useRef } from "react";

// initially the value of ref will be undefined because first it will get initialised 
export function usePrev(value) {
    const ref = useRef(); // first this line run
    console.log(`re-render happenend with new value ${value}`);

    useEffect(() => {
        console.log(`updated the ref to be ${value}`);
        ref.current = value; // and at last this line will run
    }, [value]);

    console.log(`returned ${ref.current}`);
    return ref.current; // secondly this line will run
}

// react returns first, effect gets called later