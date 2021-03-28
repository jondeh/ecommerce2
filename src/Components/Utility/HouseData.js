import React, { useState, useContext } from 'react';
import '../../SCSS/HouseData.scss';
import { CustomContext } from '../../context/CustomContext';
import GoogleMap from './GoogleMap';
import HouseLoader from '../Utility/loaders/HouseLoader';
import HouseNumbers from './HouseNumbers';
import SurveyInfo from '../Utility/SurveyInfo';

const HouseData = ({ latLng }) => {
    const { propData } = useContext(CustomContext);

    return (
        
        <div id="house-data">
            {
                (propData && latLng) ? <React.Fragment>

                    <div className="google-container">
                        <GoogleMap {...{latLng}} />
                    </div>

                </React.Fragment> : <SurveyInfo {...{type: "home"}}/>
            }
            
        </div>
    );
};


export default HouseData;