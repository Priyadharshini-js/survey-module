import React from "react"
import NavBar from "../components/common/Layout/NavBar/NavBar"
import SideBar from "../components/common/Layout/SideBar/SideBar"
import BreadCrumbs from "../components/common/Layout/BreadCrumbs/BreadCrumbs"
import SurveyGroup from "../components/Survey/SurveyGroup/SurveyGroup"

const SurveyPage = () => {
    return (
        <>
            <section>
                <NavBar />
                <div className="viewport-layout d-flex">
                    <div className="bg-white">
                        <SideBar />
                    </div>
                    <div className="survey-layout flex-grow-1">
                        <div className="container-fluid">
                            <BreadCrumbs />
                            <SurveyGroup />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SurveyPage