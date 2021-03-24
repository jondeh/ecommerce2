import React, { useState, useEffect, useContext } from 'react';
import { CustomContext } from '../../context/CustomContext';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const PetOption = ({ pet }) => {
    const { whoPets, setWhoPets, handlePetClick } = useContext(CustomContext);
    // const [whoPets, setWhoPets] = useState([])

    const [myStyle, setMyStyle] = useState({boxShadow: whoPets.includes(pet.text) && `0px 0px 5px 3px ${accent}`});


    useEffect(() => {
        setMyStyle({boxShadow: whoPets.includes(pet.text) && `0px 0px 5px 3px ${accent}`})
    }, [whoPets]);

    return (
        <div className="pet" onClick={() => handlePetClick(pet.text)} style={myStyle}>
            {pet.image}
            <span className="home-size-text">{pet.text}</span>
        </div>
    )
}

export default PetOption;