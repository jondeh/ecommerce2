import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import '../../SCSS/DisplayBug.scss';

const DisplayBug = ({ thisBug, bugSuggestions }) => {
    const { addBug } = useContext(AppContext);

    const [testStyle, setTestStyle] = useState(
        {background: (bugSuggestions) && 
            bugSuggestions.includes(thisBug.bug) ? "lightgreen" : null}
    )

    const testClick = () => {
        addBug(thisBug.bug)
        setTestStyle({background: !testStyle.background && "lightgreen"})
    }

    return (
        <div className="display-bug">
            <div className={`display-bug`}>
                <span>{thisBug.bug}</span>
                <div className="bug-image" onClick={testClick} style={testStyle}>
                    <div className="bug-image-container">
                    {thisBug.image}

                    </div>
                </div>
                <span></span>
            </div>
        </div>
    )
}

export default DisplayBug;