import React from "react"
import NavBar from "../common/Layout/NavBar/NavBar"
import SideBar from "../common/Layout/SideBar/SideBar"
import BreadCrumbs from "../common/Layout/BreadCrumbs/BreadCrumbs"
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