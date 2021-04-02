import React, { useState, useContext, useEffect } from 'react';
import '../../SCSS/HouseData.scss';
import { CustomContext } from '../../context/CustomContext';
import GoogleMap from './GoogleMap';
import HouseLoader from '../Utility/loaders/HouseLoader';
import HouseNumbers from './HouseNumbers';
import SurveyInfo from '../Utility/SurveyInfo';

const HouseData = ({ latLng }) => {
    const { propData } = useContext(CustomContext);
    const [coordinates, setCoordinates] = useState(latLng);

    useEffect(() => {
        console.log("I'M THE MAP: ", latLng)
        setCoordinates(latLng);
    }, [latLng])

    return (
        
        <div id="house-data">
            {
                (propData && latLng) ? <React.Fragment>

                    <div className="google-container">

                        {/* <div className="map-square-feet">
                            <span className="first"><strong>home size: </strong></span>
                            <p className="number"><span> {propData && propData[0].sizeData.grossSize}</span> sq ft</p>
                        </div> */}
                        
                        <GoogleMap {...{coordinates}} />
                    </div>

                </React.Fragment> : <SurveyInfo {...{type: "home"}}/>
            }
            
        </div>
    );
};


export default HouseData;