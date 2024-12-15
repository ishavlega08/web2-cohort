import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { networkAtom } from "./store/atoms/networkAtom";
import { jobsAtom } from "./store/atoms/jobsAtom";
import { messagingAtom } from "./store/atoms/messagingAtom";
import { notificationAtom } from "./store/atoms/notificationAtom";
import { useMemo } from "react";
import { totalNotificationSelector } from "./store/selectors/totalNotificationAtom";
import { notifications } from "./store/atoms/notifications";

function App() {

  return (
    <>
      <RecoilRoot>
        <NavBar />
      </RecoilRoot>
    </>
  )
}

function NavBar() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (    
    <>
      <button>Home</button>
    
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
    
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

// function NavBar() {
//   const newtorkNotificationCount = useRecoilValue(networkAtom);
//   const jobsCount = useRecoilValue(jobsAtom);
//   const messagingCount = useRecoilValue(messagingAtom);
//   const notificationsCount = useRecoilValue(notificationAtom);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
//   // const totalNotificationCount = useMemo(() => {
//   //   return newtorkNotificationCount + jobsCount + messagingCount + notificationsCount
//   // }, [newtorkNotificationCount, jobsCount, messagingCount, notificationsCount])

//   return (    
//     <>
//       <button>Home</button>

//       <button>My network ({newtorkNotificationCount >= 100 ? "99+" : newtorkNotificationCount})</button>
//       <button>Jobs ({jobsCount})</button>
//       <button>Messaging ({messagingCount})</button>
//       <button>Notifications ({notificationsCount})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

export default App
