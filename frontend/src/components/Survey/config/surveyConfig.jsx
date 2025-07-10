export const survey = [
    {
        id: 1,
        title: 'Survey details',
        status: 'completed',
        createdBy: 'vikram',
        createdDate: '08-07-2025',
        template: 'Template 1',
        dates: ['08-07-2025', '09-07-2025', '10-07-2025'],
        scheduledTime: '09:30 AM',
        expiry: '3 days',
        stakeHoldersCount: 4,
        stakeHoldersNames: ['ram', 'kumar', 'usha', 'priya'],
        feedbackBy: 'Robert Jame',
        link: 'https://www.google.com',
        surveyResponse: {
            title: 'Survey response',
            sprintOnTrack: 'Yes',
            teamMeetProjectGoal: 2,
            teamOverallRatings: 5,
            teamMeetExpectations: 5,
            teamOverallProductivity: 5
        }
    },
    {
        id: 2,
        title: 'Survey details',
        status: 'Inprogress',
        createdBy: 'Vikram',
        createdDate: '08-07-2025',
        template: 'Template 1',
        dates: ['08-07-2025', '09-07-2025', '10-07-2025'],
        scheduledTime: '09:30 AM',
        expiry: '3 days',
        stakeHoldersCount: 4,
        stakeHoldersNames: ['ram', 'kumar', 'usha', 'priya'],
        feedbackBy: 'Robert Jame',
        link: 'https://www.google.com',
        surveyResponse: {
            title: 'Survey response',
            sprintOnTrack: 'Yes',
            teamMeetProjectGoal: 5,
            teamOverallRatings: 5,
            teamMeetExpectations: 5,
            teamOverallProductivity: 5
        }
    },
    {
        id: 3,
        title: 'Survey details',
        status: 'Open',
        createdBy: 'Vikram',
        createdDate: '08-07-2025',
        template: 'Template 1',
        dates: ['08-07-2025', '09-07-2025', '10-07-2025'],
        scheduledTime: '09:30 AM',
        expiry: '3 days',
        stakeHoldersCount: 4,
        stakeHoldersNames: ['ram', 'kumar', 'usha', 'priya'],
        feedbackBy: 'Robert Jame',
        link: 'https://www.google.com',
        surveyResponse: {
            title: 'Survey response',
            sprintOnTrack: 'Yes',
            teamMeetProjectGoal: 5,
            teamOverallRatings: 5,
            teamMeetExpectations: 5,
            teamOverallProductivity: 5
        }
    }
]


export const surveyQuestions = [
    {
        id: 1,
        response: 'Is the sprint on track?',
        type: 'radio',
        key: 'sprintOnTrack',
    },
    {
        id: 2,
        response: 'How well does our team meet the overall project goals?',
        type: 'bar',
        key: 'teamMeetProjectGoal',

    },
    {
        id: 3,
        response: 'What would be your overall rating for the team?',
        type: 'stars',
        key: 'teamOverallRatings',

    },
    {
        id: 4,
        response: 'How well does our team meet your expectations?',
        type: 'emoji',
        key: 'teamMeetExpectations',

    },
    {
        id: 5,
        response: "How is the team's overall productivity?",
        type: 'chart',
        key: 'teamOverallProductivity',

    }
]

