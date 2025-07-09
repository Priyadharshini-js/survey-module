import React from "react"
import SurveyDetails from "../SurveyDetails/SurveyDetails"
import SurveyResponse from "../SurveyResponse/SurveryResponse"

const SurveyGroup = () => {
    return (
        <>
            <section>
                <div className="survey-group my-4">
                    <div className="survey-group-container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <SurveyDetails />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <SurveyResponse />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SurveyGroup