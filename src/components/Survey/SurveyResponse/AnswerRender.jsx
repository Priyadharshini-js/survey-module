import React from 'react'
import RadioType from './RadioType'
import BarType from './BarType'
import StarType from './StarType'
import EmojiType from './EmojiType'
import ChartType from './ChartType'

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
export default AnswerRender