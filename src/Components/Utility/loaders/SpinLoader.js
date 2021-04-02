import React, { useContext } from 'react';
// import '../../../SCSS/SpinLoader.scss';
import { CustomContext } from '../../../context/CustomContext';
import styled from 'styled-components';
import { ReactComponent as LoaderComponent } from './Spin-1s-200px.svg';

const StyledSpinner = styled(LoaderComponent)`
    display: block;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SpinLoader = () => {
    // const { spinLoad } = useContext(CustomContext);

    // console.log("spinLoad", spinLoad)

    return (
        <div className="spin-loader-container">
            <StyledSpinner />
        </div>
    );
};

export default SpinLoader;