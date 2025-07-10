import React from 'react'
import { surveyResponseShape } from "../../config/surveyPropTypes"


const RadioType = ({ value }) => {

    if (!value) return null
    return (
        <>
            <div className='d-flex gap-15'>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sprint-status"
                        id="radioYes"
                        checked={value === 'Yes'}
                        readOnly
                    />
                    <label className="form-check-label" htmlFor="radioYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sprint-status"
                        id="radioNo"
                        checked={value === 'No'}
                        readOnly
                    />
                    <label className="form-check-label" htmlFor="radioNo">
                        No
                    </label>
                </div>
            </div>
        </>
    )
}
RadioType.propTypes = {
    value: surveyResponseShape.isRequired
};
export default RadioType