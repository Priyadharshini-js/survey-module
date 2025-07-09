import React from "react"
import NavBar from "../common/Layout/NavBar/NavBar"
import SideBar from "../common/Layout/SideBar/SideBar"
import BreadCrumbs from "../common/Layout/BreadCrumbs/BreadCrumbs"
import Header from "../common/Layout/Header/Header"
import SurveyGroup from "../components/Survey/SurveyGroup/SurveyGroup"

const SurveyPage = () => {
    return (
        <>
            <section>
                <NavBar />
                <div className="viewport-layout row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <SideBar />
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 survey-layout">
                        <div className="container-fluid">
                            <BreadCrumbs />
                            <Header title='VA Launchpad 5' />
                            <SurveyGroup />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SurveyPage