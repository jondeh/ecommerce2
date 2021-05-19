import React from 'react';
import '../../SCSS/ScheduleSection.scss';
import {AiFillInfoCircle} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';

const ScheduleSection = ({ boxName, boxDate, boxItems, boxImage, i }) => {
    // console.log("ScheduleSection Props:", boxName, boxItems, boxDate);

    const mappedItems = boxItems.map((item, i) => {
        return (
            <div className="product" key={i}>
                <div className="product-image">
                    {/* {item.image} */}
                    <div className="dummy-circle">{`product ${i+1}`}</div>
                </div>
                <div className="product-name">
                    <div className="info-icon"><BsInfoCircle 
                        size={18} 
                        /></div>
                    
                    <span> {item.name} </span>
                </div>
            </div>
        )
    })

    return (
        <div className="section-container" id={`section-${i}`}>
            <div className="section-header">
                <div className="box-name">
                    <img src={boxImage} />
                    <span>{boxName}</span>
                </div>
                <span>{boxDate}</span>
            </div>
            <div className="section-products">
                {mappedItems}
            </div>
        </div>
    )
}

export default ScheduleSection;