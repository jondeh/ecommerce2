import React, { useContext } from 'react';
import '../../../SCSS/HouseLoader.scss';
import { CustomContext } from '../../../context/CustomContext';
import {BsFillHouseFill} from 'react-icons/bs';
import {AiFillBug} from 'react-icons/ai';
import styled from 'styled-components';
import { ReactComponent as HouseComponent } from '../../../data/media/house1.svg';

import BugRingLoader from './BugRingLoader/BugRingLoader';

const StyledHouse = styled(HouseComponent)`
    display: block;
    margin: auto;
    width: 30em;
    height: 30em;
`

const HouseLoader = () => {
    const { homeLoad } = useContext(CustomContext);

    console.log("homeload", homeLoad)

    return (
        <div className="house-loader-container">
            {homeLoad ? <BugRingLoader {...{
                count: 25, 
                // timing: "ease-in-out",
                // speed: 1,
                color: "#5D76A9",
                text: "verifying...",
                delay: 20,
                }} /> : null}
            

            <StyledHouse />
        </div>
    );
};

export default HouseLoader;