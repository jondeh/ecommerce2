import React from 'react';

import '../../SCSS/MyPlan.scss';

const MyPlan = () => {

    const myPlanData = [
        {picture: null, description: "full year plan"},
        {picture: null, description: "3 shipments first ships now"},
        {picture: null, description: "free termite inspection"},
        {picture: null, description: "Indoor/Outdoor protection"},
    ]

    const mappedData = myPlanData.map((e,i) => {
        return <div className="my-plan-box-row" key={i} >
                    <div className="row-left">{e.image}</div>
                    <div className="row-right"><span>{e.description}</span></div>
                </div>
    })

    const gridStyle = {
        gridTemplateRows: `repeat(${myPlanData.length}, 1fr)`
    }

    return (
        <div className="my-plan-container" style={gridStyle}>
            <h1>My Plan</h1>
            <span>Order your nutrient plan for a beautiful, lush, healthy lawn from spring to fall.</span>
            <div className="my-plan-box">
            {mappedData}
            </div>
        </div>
    )
}

export default MyPlan;