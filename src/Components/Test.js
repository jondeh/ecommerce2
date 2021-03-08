import React from 'react';
import '../SCSS/Test.scss';
import GoogleMap from './Utility/GoogleMap';
import GoogleFind from './Utility/GoogleFind';


const Test = () => {
    return (
        <div className="test-container">
            {/* <GoogleMap /> */}
            <GoogleFind />
        </div>
    )
}

export default Test;