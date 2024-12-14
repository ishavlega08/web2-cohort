import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const evenSelector = selector({
    key: "isEvenSelector",
    get: ({ get }) => {
        const currentCounter = get(counterAtom);
        const isEven = (currentCounter % 2 == 0);
        return isEven;
    }
})