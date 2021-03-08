import React, { useState, useContext } from 'react';
import '../../SCSS/MyPlan.scss';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import EmailQuestion from '../Sections/EmailQuestion';
import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';
import ScheduleSection from '../Sections/ScheduleSection';
import { dummyProducts } from '../../data/webData';
import {FaBoxOpen} from 'react-icons/fa';
import {BiCalendar, BiStreetView} from 'react-icons/bi';
import {GiFruitTree} from 'react-icons/gi';
// import {FaBoxOpen} from 'react-icons/fa';
import winter from '../../data/media/winter.png';
import autumn from '../../data/media/autumn.png';
import spring from '../../data/media/spring.png';
import summer from '../../data/media/summer.png';

const {
    insideDefense, outsideOffense,
    proYard, proHouse, proTermite, proWeb
} = dummyProducts;

const MyPlan = () => {
    const { push } = useHistory()
    const { user } = useContext(UserContext);
    const { setAddOnQuestion } = useContext(AppContext);
    // let today = new Date();          // Probably do in SQL
    // let day = today.getDate();
    // let month = today.getMonth();
    // console.log("today", today, "day", day, "month",  month)
    const [plan, setPlan] = useState([      // dummy data
        {      
            boxImage: spring,    
            boxName: 'Spring Service - professional',
            boxItems: [proYard, proHouse, proTermite, proWeb],
            boxDate: ' 3/15', 
        },
        {        
            boxImage: summer,    
            boxName: 'Summer Box',
            boxItems: [insideDefense, outsideOffense],
            boxDate: ' 6/14', 
        },
        {      
            boxImage: autumn,    
            boxName: 'Fall Box',
            boxItems: [insideDefense, outsideOffense],
            boxDate: ' 9/13', 
        },
        {    
            boxImage: winter,    
            boxName: 'Winter Box',
            boxItems: [insideDefense, outsideOffense],
            boxDate: ' 12/15', 
        },
    ]);

    const myPlanData = [
        {image: <BiCalendar size={29} color={"#ACE1AF"}/>, description: "full year protection"},
        {image: <BiStreetView size={29} color={"#ACE1AF"}/>, description: "1 professional treatment"},
        {image: <FaBoxOpen size={29} color={"#ACE1AF"}/>, description: "3 shipments"},
        {image: <GiFruitTree size={29} color={"#ACE1AF"}/>, description: "indoor/outdoor protection"},
    ];

    const imageStyle = {
        height: `calc(50vh / ${myPlanData.length+1})`, 
        width: `calc(50vh / ${myPlanData.length+1})`, 
    }

    
    const handleBuy = () => {
        setAddOnQuestion(true);
        // push('/cart')
    };
    
    const gridStyle = {
        gridTemplateRows: `repeat(${myPlanData.length}, 1fr)`
    };
    
    const mappedPlan = plan.map((section, i) => {
        // const { name, items, date } = section;
        console.log("section", section)
        return <ScheduleSection key={i} {...{...section}}/>
    })

    const mappedData = myPlanData.map((e,i) => {
        return <div className="my-plan-box-row" key={i} >
                    <div className="row-left" style={imageStyle}>{e.image}</div>
                    <div className="row-right"><span>{e.description}</span></div>
                </div>
    });

    return (
        <div className="my-plan-container" >
            <div className="my-plan-box-container">
            <h3>your plan</h3>
                <div className="my-plan-box" style={gridStyle}>
                    {mappedData}
                </div>
            <Button 
                onClick={handleBuy}
                variant="contained">BUY NOW</Button>
            </div>
            <div className="my-plan-schedule-container">
                <h3>plan details</h3>
                {mappedPlan}
            </div>
            
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