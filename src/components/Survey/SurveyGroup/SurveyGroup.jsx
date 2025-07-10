import React, { useState, useEffect } from "react"
import SurveyDetails from "../SurveyDetails/SurveyDetails"
import SurveyResponse from "../SurveyResponse/SurveyResponse"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Header from "../../../common/Layout/Header/Header"
import { survey } from "../config/surveyConfig"

const SurveyGroup = () => {
    const [getData, setGetData] = useState([]);
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    //function for fetchData
    useEffect(() => {
        console.log("Survey data:", survey);
        setGetData(survey)
        setSelectedSurvey(survey[0])
    }, [])

    //post method to send details
    const handlePost = () => {
        console.log("Simulated POST payload:", selectedSurvey);
        alert("Survey resent successfully (simulated)");
    };


    return (
        <>
            <section>
                <div className="survey-group my-2">
                    <div className="survey-group-container">
                        <div className="d-flex justify-content-between align-items-center">
                            <Header title='VA Launchpad 5' />
                            <div className="text-end">
                                <button className="blue-bg-btn send-response" onClick={handlePost}>
                                    <FontAwesomeIcon className="icons" icon={faAngleRight} />
                                    Resend survey
                                </button>
                            </div>
                        </div>
                        <div className="row row-15">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <SurveyDetails data={selectedSurvey} />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <SurveyResponse data={selectedSurvey} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SurveyGroup