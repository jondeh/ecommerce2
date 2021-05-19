import React, { useState, useContext, useEffect } from 'react';
import '../../SCSS/HouseData.scss';
import { CustomContext } from '../../context/CustomContext';
import GoogleMap from './GoogleMap';
import HouseLoader from '../Utility/loaders/HouseLoader';
import HouseNumbers from './HouseNumbers';
import SurveyInfo from '../Utility/SurveyInfo';

const HouseData = ({ customLatLng }) => {
    const { propData } = useContext(CustomContext);
    const [coordinates, setCoordinates] = useState(customLatLng);

    useEffect(() => {
        setCoordinates(customLatLng);
    }, [customLatLng])

    return (
        
        <div id="house-data">
            {
                (propData && customLatLng) ? <React.Fragment>

                    <div className="google-container">

                        {/* <div className="map-square-feet">
                            <span className="first"><strong>home size: </strong></span>
                            <p className="number"><span> {propData && propData[0].sizeData.grossSize}</span> sq ft</p>
                        </div> */}
                        
                        <GoogleMap {...{type: "custom", coordinates}} />
                    </div>

                </React.Fragment> : <SurveyInfo {...{type: "home"}}/>
            }
            
        </div>
    );
};


export default HouseData;