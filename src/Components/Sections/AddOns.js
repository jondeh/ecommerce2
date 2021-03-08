import React, { useState, useContext } from 'react';
import '../../SCSS/AddOns.scss';
import { dummyAddOns } from '../../data/webData'
import {HiPlus} from 'react-icons/hi';
import { AppContext } from '../../context/AppContext';

const {advion, lemexa, roachGel, mouseTrap} = dummyAddOns;

const AddOns = () => {
    const { cart, setCart } = useContext(AppContext);
    const [addOns, setAddOns] = useState(
        [advion, lemexa, roachGel, mouseTrap]
    );

    const handleAdd = (item) => {
        setCart((cart) => {
            return [...cart, item]
        })
    }

    const mappedAddOns = addOns.map((item, i) => {
        return (
            <div className="add-on">
                <div className="plus-icon">
                    <HiPlus 
                        size={20} 
                        onClick={() => handleAdd(item)} />
                </div>
                <div className="add-on-div">
                    <div className="add-on-text">
                        <span className="item-name">{item.name}</span>
                        <span className="item-description">{item.description}</span>
                    </div>
                </div>
                <span className="price">${item.price}</span>
                <div className="image"><span>image</span></div>
            </div>
        )
    })

    return (
        <div className="add-ons-container">
            {mappedAddOns}
        </div>
    )
}

export default AddOns;