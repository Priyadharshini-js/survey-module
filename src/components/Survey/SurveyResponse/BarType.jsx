import React from 'react'

const BarType = ({ value }) => {
    const totalSegments = 5;
    return (
        <>
            <div>
                <div className="d-flex gap-1">
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
            </div>
        </>
    )
}
export default BarType