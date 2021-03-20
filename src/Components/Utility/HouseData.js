import React, { useState, useContext } from 'react';
import '../../SCSS/HouseData.scss';
import { CustomContext } from '../../context/CustomContext';
import GoogleMap from './GoogleMap';
import HouseLoader from '../Utility/loaders/HouseLoader';

const HouseData = ({ latLng }) => {
    const { propData } = useContext(CustomContext);

    console.log("LATLNG: ", latLng);

    // const [houseData, setHouseData] = useState(propData[0])

    console.log("PROPDATA: ", propData);

    return (
        
        <div id="house-data">
            {
                (propData && latLng) ? <React.Fragment>

                    <HouseNumbers {...{propData}}/>

                    <div className="google-container">
                        <GoogleMap {...{latLng}} />
                    </div>

                </React.Fragment> : <HouseLoader />
            }
            {/* <HouseLoader /> */}
            
        </div>
    );
};

const HouseNumbers = ({ propData }) => {
    return (
        <div className="house-numbers-container">
            <div className="row">
                <span>Square Feet </span><span>{propData && propData[0].sizeData.grossSize}</span>
            </div>
            {/* <div className="row">
                <span>LOT SIZE: </span><span>{propData && propData[0].lotData.lotSize1}</span>
            </div>
            <div className="row">
                <span>GROUND FLOOR: </span><span>{propData && propData[0].sizeData.groundFloorSize}</span>
            </div> */}
            
            
            
        </div>
    );
};




export default HouseData;