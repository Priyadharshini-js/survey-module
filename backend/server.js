const express = require('express');
const cors = require('cors');
const survey = require('./config/surveyData.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


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