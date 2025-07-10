import React from 'react'
import AnswerRender from './AnswerRender'



const QuestionList = ({ questions, response }) => {
    return (
        <>
            <div className='response-view overflow-hidden'>
                {questions.map((item, index) => (
                    <div className="card question-card mb-3" key={index}>
                        <div className="card-body">
                            <div className="response-row">
                                <span className="label">{item.response}</span>
                                <span className="value">
                                    <AnswerRender type={item.type} value={response.surveyResponse} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default QuestionList