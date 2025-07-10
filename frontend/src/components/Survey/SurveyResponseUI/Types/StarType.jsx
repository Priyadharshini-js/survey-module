import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { surveyResponseShape } from "../../config/surveyPropTypes"


const StarType = ({ value }) => {
    if (!value) return null
    return (
        <>
            <div className='d-flex'>
                {Array.from({ length: value }, (_, index) => (
                    <FontAwesomeIcon key={index} className='star-icon me-2' icon={faStar} />
                ))}
            </div>
        </>
    )
}

StarType.propTypes = {
    value: surveyResponseShape.isRequired
};
export default StarType