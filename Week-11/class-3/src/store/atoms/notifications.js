import { atom, selector } from "recoil";
import axios from "axios";

// Asynchronous data queries
export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationsSelector",
        get: async () => {
            const res = await axios("https://mocki.io/v1/a19f3c74-9baf-4af8-a058-171f22adaeb3");
            return res.data;
        }
    })
});