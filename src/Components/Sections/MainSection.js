import React from 'react';
import '../../SCSS/MainSection.scss';

const MainSection = ({ objType, text, image, imageAlt, index }) => {

    const sectionPlace = index % 2 === 0 ? "right" : "left";


    const sectionStyle = {
        background: index % 2 === 0 ? "#E1EBEE" : "white",
    }

    return (
        <div className="main-section" style={sectionStyle}>
            <h2>{objType}</h2>
            <div className={`section-body ${sectionPlace}`}>
                <img src={image} alt={imageAlt} />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default MainSection;