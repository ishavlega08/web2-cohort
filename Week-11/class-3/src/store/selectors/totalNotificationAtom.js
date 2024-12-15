import { selector } from "recoil";
import { notifications } from "../atoms/notifications";

export const totalNotificationSelector = selector({
    key: "totalNotification",
    get: ({ get }) => {
        const allNotifications = get(notifications);

        return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications;
    }
})