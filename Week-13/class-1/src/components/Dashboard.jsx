import { MainContent } from "./MainContent"
import { Sidebar } from "./Sidebar"

export const Dashboard = () => {

    return (
        <div className="flex">
            <Sidebar />
            <MainContent />
        </div>
    )
}