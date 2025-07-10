import React from 'react'
import RadioType from './Types/RadioType'
import BarType from './Types/BarType'
import StarType from './Types/StarType'
import EmojiType from './Types/EmojiType'
import ChartType from './Types/ChartType'
import { surveyResponseShape } from "../config/surveyPropTypes"


const AnswerRender = ({ type, value }) => {
    switch (type) {
        case 'radio':
            return <RadioType value={value.sprintOnTrack} />
        case 'bar':
            return <BarType value={value.teamMeetProjectGoal} />
        case 'stars':
            return <StarType value={value.teamOverallRatings} />
        case 'emoji':
            return <EmojiType value={value.teamMeetExpectations} />
        case 'chart':
            return <ChartType value={value.teamOverallProductivity} />
        default:
            return <span>{value}</span>;
    }
}

AnswerRender.propTypes = {
    value: surveyResponseShape.isRequired
};
export default AnswerRender