import React, { useState, useEffect, useContext } from 'react';

// import { AppContext } from '../../context/AppContext';

import '../../SCSS/ImageTile.scss';

const ImageTile = ({ thisBug, bugAnswer, addBug }) => {
    // const { addBug } = useContext(AppContext);

    const [testStyle, setTestStyle] = useState(
        {background: (bugAnswer) && 
            bugAnswer.includes(thisBug.bug) ? '#ACE1AF' : null}
    )

    const testClick = () => {
        addBug(thisBug.bug)
        setTestStyle({background: !testStyle.background && '#ACE1AF'})
    }

    return (
        <div className="display-bug">
                <div 
                    className="bug-image" 
                    onClick={testClick} 
                    style={testStyle}>
                    <div className="bug-image-container">
                        {thisBug.image}
                    </div>
                    <span>{thisBug.bug}</span>
                </div>
        </div>
    )
}

export default ImageTile;