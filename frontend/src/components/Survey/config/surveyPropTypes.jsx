import PropTypes from 'prop-types'


export const surveyResponseShape = PropTypes.shape({
    title: PropTypes.string,
    sprintOnTrack: PropTypes.string, 
    teamMeetProjectGoal: PropTypes.number,
    teamOverallRatings: PropTypes.number,
    teamMeetExpectations: PropTypes.number,
    teamOverallProductivity: PropTypes.number,
});

export const surveyShape = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    createdBy: PropTypes.string,
    createdDate: PropTypes.string,
    template: PropTypes.string,
    dates: PropTypes.arrayOf(PropTypes.string),
    scheduledTime: PropTypes.string,
    expiry: PropTypes.string,
    stakeHoldersCount: PropTypes.number,
    stakeHoldersNames: PropTypes.arrayOf(PropTypes.string),
    feedbackBy: PropTypes.string,
    link: PropTypes.string,
    surveyResponse: surveyResponseShape,
})
