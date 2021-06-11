import React from 'react';
import DoughnutGraph from '../graphs/Doughnut'
import '../../../SCSS/DashCard.scss'

const DashCard = ({ value }) => {
    return (
        <div className="dash-card">
            <DoughnutGraph {...{ value }}/>
            <p>The weather is favorable for a high level of mosquito activity. Plan activities and insect repellents accordingly.</p>
        </div>
    )
}

export default DashCard;