import React,{useState, useEffect} from "react"
import NavBar from "../components/common/Layout/NavBar/NavBar"
import SideBar from "../components/common/Layout/SideBar/SideBar"
import BreadCrumbs from "../components/common/Layout/BreadCrumbs/BreadCrumbs"
import SurveyGroup from "../components/Survey/SurveyGroup/SurveyGroup"

const SurveyPage = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    useEffect(() => {
        const handleSidebarToggle = (event) => {
            setSidebarCollapsed(event.detail.collapsed);
        };

        window.addEventListener('sidebar-toggle', handleSidebarToggle);

        return () => {
            window.removeEventListener('sidebar-toggle', handleSidebarToggle);
        };
    }, []);
    return (
        <>
            <div className="app-container">
                <NavBar />
                <div className="content-wrapper">
                    <SideBar />
                    <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                        <BreadCrumbs />
                        <SurveyGroup />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SurveyPage