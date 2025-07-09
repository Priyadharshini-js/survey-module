import React from "react"

const SurveyDetails = () => {


    return (
        <>
            <div className="survey-details">
                <div className="survey-details-container">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h2 className="label">Survey details</h2>
                                <span className="value">Completed</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Created by</span>
                                <span className="value">viji</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Created date</span>
                                <span className="value">21-05-2025</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey template</span>
                                <span className="value">Template 2</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey dates</span>
                                <span className="value">22-09-2025 23-09-2025 21-09-2025</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Scheduled time</span>
                                <span className="value">9:30 AM</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey expiry</span>
                                <span className="value">2 days</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Stakeholders</span>
                                <span className="value"></span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey link</span>
                                <span className="value"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SurveyDetails