import React, { useState, useEffect, useContext } from 'react';

// import { AppContext } from '../../context/AppContext';
import { colors } from '../../data/variables';
import '../../SCSS/ImageTile.scss';
const { primary, secondary, accent, textColor} = colors;

const ImageTile = ({ thisBug, bugAnswer, addBug }) => {
    // const { addBug } = useContext(AppContext);

    // const colorGreen = '#ACE1AF'
    // const colorGreen = "#76ff76"
    // const colorGreen = "#00ff7f"
    

    const [testStyle, setTestStyle] = useState(
        {background: (bugAnswer) && 
            bugAnswer.includes(thisBug.bug) ? accent : null}
    )

    const testClick = () => {
        addBug(thisBug.bug)
        setTestStyle({background: !testStyle.background && accent})
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