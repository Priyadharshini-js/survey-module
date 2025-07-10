import React, { useState } from "react"
import { surveyShape } from "../config/surveyPropTypes"

const SurveyDetails = ({ data }) => {
    const [copied, setCopied] = useState(false);
    const details = data;

    const colors = ['var(--color-high)', 'var(--color-low)', 'var(--success-color)', 'var(--tertiary-color)', 'var(--yellow)'];

    if (!details) return null;

    //funtion to copy link
    const handleCopy = () => {
        if (details?.link) {
            navigator.clipboard.writeText(details.link)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                    console.log("Link copied!");
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        }
    };



    return (
        <>
            <div className="details-view">
                <div className="details-container">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h2 className="label">Survey details</h2>
                                <span className={`value ${details.status?.toLowerCase()}`}>
                                    {details.status?.charAt(0).toUpperCase() + details.status?.slice(1).toLowerCase()}</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Created by</span>
                                <span className="value">
                                    {details.createdBy?.charAt(0).toUpperCase() + details.createdBy?.slice(1).toLowerCase()}</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Created date</span>
                                <span className="value">{details.createdDate}</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey template</span>
                                <span className="value">{details.template}</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey dates</span>
                                <div className="d-flex">
                                    {details.dates?.map((date, index) => (
                                        <span key={index} className={`value dates-bg`}> {date}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="detail-row">
                                <span className="label">Scheduled time</span>
                                <span className="value">{details.scheduledTime}</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey expiry</span>
                                <span className="value">{details.expiry}</span>
                            </div>
                            <div className="detail-row">
                                <span className="label">Stakeholders ({details.stakeHoldersCount})</span>
                                <div className="d-flex initials-group">
                                    {details.stakeHoldersNames?.slice(0, 3).map((name, index) => (
                                        <span
                                            key={index}
                                            className={`value name-bg`}
                                            style={{ backgroundColor: colors[index % colors.length] }}
                                        >{name.charAt(0).toUpperCase()}</span>
                                    ))}
                                    {details.stakeHoldersNames?.length > 3 && (
                                        <span className="value name-bg more-count">
                                            +{details.stakeHoldersNames.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="detail-row">
                                <span className="label">Survey link</span>
                                <span className={`value link-bg`}>{details.link}</span>
                                <strong>
                                    <button
                                        className="btn btn-link p-0 m-0"
                                        onClick={handleCopy}
                                    >
                                        {copied ? 'Copied!' : 'Copy link'}
                                    </button>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


SurveyDetails.propTypes = {
    data: surveyShape
};
export default SurveyDetails