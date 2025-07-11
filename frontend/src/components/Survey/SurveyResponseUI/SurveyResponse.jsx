import React from "react"
import QuestionList from './QuestionList'
import { surveyQuestions } from "../config/surveyConfig"
import { surveyShape } from "../config/surveyPropTypes"


const SurveyResponse = ({ data }) => {
    const details = data;

    if (!details) return <p>No survey selected</p>;

    return (
        <>
            <div className="response-view">
                <div className="response-container">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2 response-row-nav">
                                <h2 className="label">Survey response</h2>
                                <div className="d-flex gap-15 response-row-header">
                                    <span className="label">Feedback by:</span>
                                    <span className="value">{details.feedbackBy}</span>
                                </div>
                            </div>
                            <div>
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Survey response</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Feedbacks</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <QuestionList questions={surveyQuestions} response={details} />
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

SurveyResponse.propTypes = {
    data: surveyShape.isRequired
}
export default SurveyResponse