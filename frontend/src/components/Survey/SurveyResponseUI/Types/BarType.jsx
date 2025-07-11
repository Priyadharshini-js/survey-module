import React from 'react'
import { surveyResponseShape } from "../../config/surveyPropTypes"


const BarType = ({ value }) => {
    const totalSegments = 5;
    return (
        <>
            <div>
                <div className="bar-type-wrapper">
                    <div className="d-flex gap-1 mb-2">
                        {Array.from({ length: totalSegments }, (_, index) => {
                            const isFilled = index < value;
                            return (
                                <div
                                    key={index}
                                    className={`progress-segment ${isFilled ? 'bg-secondary' : 'grey'}`}
                                ></div>
                            )
                        })}
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Extremely Unsatisfied</span>
                        <span className="text-muted small">Extremely Satisfied</span>
                    </div>
                </div>
            </div>
        </>
    )
}
BarType.propTypes = {
    value: surveyResponseShape.isRequired
};
export default BarType