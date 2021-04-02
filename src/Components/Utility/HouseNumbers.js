import React from 'react';
import '../../SCSS/HouseNumbers.scss';
import { Button } from '@material-ui/core';
import { colors } from '../../data/variables';

const { primary, secondary, accent, textColor, altBlue, accent2} = colors;

const HouseNumbers = ({ propData, perimeter }) => {

    const buttonStyle1 = {
        background: accent,
        color: "white",
        borderColor: "white",
    };

    // const buttonStyle2 = {
    //     background: index % 2 !== 0 ? accent : null,
    //     color: index % 2 !== 0 ? "white" : null,
    // };



    console.log("propData", propData);

    return (
        <div className="house-numbers-container">
            {
                propData && <>
            {/* <span className="square-feet"><strong>home size:</strong> {propData && propData[0].sizeData.grossSize} sq ft</span> */}
            <div className="linear-feet-container">
            <h1>home perimeter</h1>
            <h3>(linear feet)</h3>
            <h1><span style={{color: accent}}>{perimeter}</span> ft</h1>
            <div className="not-right"><span>that doesn't seem right...</span></div>
            </div>
            {/* <h4><span>{propData && propData[0].sizeData.grossSize}</span> sq ft.</h4> */}
            <div className="button-container">
                {/* <Button variant="contained">somethings not right</Button> */}
                {/* <Button variant="contained" style={buttonStyle1}>sounds about right</Button> */}
                <p>We calculate the linear feet based on satellite footage of your home's footprint.  It's pretty accurate, but don't worry if it's not exact.</p>
            </div>
                </>
            }
            {/* <div className="row">
                <span>LOT SIZE: </span><span>{propData && propData[0].lotData.lotSize1}</span>
            </div>
            <div className="row">
                <span>GROUND FLOOR: </span><span>{propData && propData[0].sizeData.groundFloorSize}</span>
            </div> */}
        </div>
    );
};

export default HouseNumbers;