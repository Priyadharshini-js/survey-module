import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faFrownOpen, faLaugh, faSmile, faSmileWink } from "@fortawesome/free-solid-svg-icons"


const EmojiType = ({ value }) => {
    if (!value) return null

    const emojiResponses = [
        {
            id: 1,
            title: 'Very Low',
            icon: faFrown,
            color: 'red',
        },
        {
            id: 2,
            title: 'Low',
            icon: faFrownOpen,
            color: 'lightred',
        },
        {
            id: 3,
            title: 'Average',
            icon: faSmile,
            color: 'yellow',
        },
        {
            id: 4,
            title: 'High',
            icon: faSmileWink,
            color: 'lightgreen',
        },
        {
            id: 5,
            title: 'Very High',
            icon: faLaugh,
            color: 'green',
        },
    ]

    return (
        <div className="row justify-content-center">
            {emojiResponses.map((item) => (
                <div
                    key={item.id}
                    className="col-lg-2 col-md-12 col-sm-12 d-flex flex-column align-items-center"
                    style={{ opacity: item.id === value ? 1 : 0.5 }}
                >
                    <FontAwesomeIcon className={item.color}
                        icon={item.icon}

                    />
                    <span className="mt-2">{item.title}</span>
                    <div className="form-check mt-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="emoji-response"
                            checked={item.id === value}
                            readOnly
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
export default EmojiType