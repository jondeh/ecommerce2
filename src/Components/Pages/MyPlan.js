import React, { useContext } from 'react';
import '../../SCSS/MyPlan.scss';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import EmailQuestion from '../Sections/EmailQuestion';
import { UserContext } from '../../context/UserContext';

const MyPlan = () => {
    const { push } = useHistory()
    const { user } = useContext(UserContext);

    const myPlanData = [
        {picture: null, description: "full year plan"},
        {picture: null, description: "3 shipments first ships now"},
        {picture: null, description: "free termite inspection"},
        {picture: null, description: "Indoor/Outdoor protection"},
    ];

    const mappedData = myPlanData.map((e,i) => {
        return <div className="my-plan-box-row" key={i} >
                    <div className="row-left">{e.image}</div>
                    <div className="row-right"><span>{e.description}</span></div>
                </div>
    });

    const handleBuy = () => {
        push('/cart')
    };


    const gridStyle = {
        gridTemplateRows: `repeat(${myPlanData.length}, 1fr)`
    };

    return (
        <div className="my-plan-container" style={gridStyle}>
            <h1>My Plan</h1>
            <span>Order your nutrient plan for a beautiful, lush, healthy lawn from spring to fall.</span>
            <div className="my-plan-box">
            {mappedData}
            </div>
            <Button 
                onClick={handleBuy}
                variant="contained">BUY NOW</Button>
        </div>
    )

    // if (user) {
    //     return (
    //         <div className="my-plan-container" style={gridStyle}>
    //             <h1>My Plan</h1>
    //             <span>Order your nutrient plan for a beautiful, lush, healthy lawn from spring to fall.</span>
    //             <div className="my-plan-box">
    //             {mappedData}
    //             </div>
    //             <Button 
    //                 onClick={handleBuy}
    //                 variant="contained">BUY NOW</Button>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <EmailQuestion />
    //     )
    // }
}

export default MyPlan;