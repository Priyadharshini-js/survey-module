const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


const survey = [
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
            teamOverallRatings: 3,
            teamMeetExpectations: 4,
            teamOverallProductivity: 5
        }
    },
    {
        id: 2,
        title: 'Survey details',
        status: 'Inprogress',
        createdBy: 'Karthik',
        createdDate: '08-07-2025',
        template: 'Template 1',
        dates: ['08-07-2025', '09-07-2025', '10-07-2025'],
        scheduledTime: '09:30 AM',
        expiry: '5 days',
        stakeHoldersCount: 2,
        stakeHoldersNames: ['ram', 'kumar'],
        feedbackBy: 'Robert Jame',
        link: 'https://www.google.com',
        surveyResponse: {
            title: 'Survey response',
            sprintOnTrack: 'Yes',
            teamMeetProjectGoal: 5,
            teamOverallRatings: 4,
            teamMeetExpectations: 3,
            teamOverallProductivity: 1
        }
    },
    {
        id: 3,
        title: 'Survey details',
        status: 'Open',
        createdBy: 'Anita',
        createdDate: '08-07-2025',
        template: 'Template 1',
        dates: ['08-07-2025', '09-07-2025', '10-07-2025'],
        scheduledTime: '09:30 AM',
        expiry: '7 days',
        stakeHoldersCount: 7,
        stakeHoldersNames: ['ram', 'kumar', 'usha', 'priya','praveen', 'abi', 'arthi'],
        feedbackBy: 'Robert Jame',
        link: 'https://www.google.com',
        surveyResponse: {
            title: 'Survey response',
            sprintOnTrack: 'Yes',
            teamMeetProjectGoal: 3,
            teamOverallRatings: 5,
            teamMeetExpectations: 1,
            teamOverallProductivity: 2
        }
    }
]

// GET endpoint
app.get('/api/getSurveyDetails', (req, res) => {
    res.json(survey);
});

// POST endpoint
app.post('/api/postSurveysDetails', (req, res) => {
    const newSurvey = req.body;
    console.log('Survey received:', newSurvey);
    res.status(201).json({ message: 'Survey submitted successfully!', data: newSurvey });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});