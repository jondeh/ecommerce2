import React, { useContext } from 'react';
import '../../SCSS/MainSection.scss';
import {colors, newColors} from '../../data/variables';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
const { primary, secondary, accent, textColor } = colors;

const MainSection = ({ section, index, type }) => {
    const { push } = useHistory();
    const { objType, text, image, imageAlt, button } = section;
    const { handleGetStarted } = useContext(AppContext);
    const sectionPlace = index % 2 === 0 ? "right" : "left";

    // const buttonStyle1 = {
    //     background: index % 2 !== 0 ? accent : null,
    //     color: index % 2 !== 0 ? "white" : null,
    //     borderColor: index % 2 !== 0 ? "white" : null,
    // }

    // const buttonStyle2 = {
    //     background: index % 2 === 0 ? accent : null,
    //     color: index % 2 === 0 ? "white" : null,
    // }

    // const handleSeePlan = () => {
    //     push('/customize');
    // }
    const handleClick = (route) => {
        push(route)
    }

    return (
        <div className="main-section" id={`${type}${index}`}>
            <h2 className="mobile-title">{objType}</h2>
            <div className={`section-body ${sectionPlace}`}>
                <img src={image} alt={imageAlt} />
                <div className="section-text">
                {objType}
                {text}
                    <div className="section-button-container">
                        {button[0] && <button style={{background: "#203864", color: "white"}} onClick={() => handleClick(button[1])} 
                        // style={buttonStyle1}
                        >{button[0]}</button>}
                        <button style={{background: newColors[3]}} onClick={() => handleGetStarted()} 
                        // style={buttonStyle2}
                        >See my plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;