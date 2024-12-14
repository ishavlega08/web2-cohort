import { atom } from "recoil";

export const counterAtom = atom({
    default: 0, // default value (aka initial value)
    key: "counter" // unique ID (with respect to other atoms/selectors)
})

