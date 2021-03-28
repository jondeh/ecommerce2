import React, { useState, useEffect, useContext } from 'react';
import { CustomContext } from '../../context/CustomContext';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const PetOption = ({ pet }) => {
    const { whoPets, setWhoPets, handlePetClick } = useContext(CustomContext);
    // const [whoPets, setWhoPets] = useState([])

    const [myStyle, setMyStyle] = useState({
        // boxShadow: whoPets.includes(pet.text) && `0px 0px 5px 3px ${accent}`,
        background: whoPets.includes(pet.text) && accent,
        color: "white",
    });
    const [textStyle, setTextStyle] = useState({
        color: whoPets.includes(pet.text) && "white",
    })


    useEffect(() => {
        let thisPet = document.getElementById(pet.text);
        setMyStyle({
            // boxShadow: whoPets.includes(pet.text) && `0px 0px 5px 3px ${accent}`,
            background: whoPets.includes(pet.text) && accent,
        });

        setTextStyle({
            color: whoPets.includes(pet.text) && primary,
        });

        if (whoPets.includes(pet.text)) {
            thisPet.style.color = "white";
        } else {
            thisPet.style.color = accent;
        }

    }, [whoPets]);

    return (
        <div className="pet" onClick={() => handlePetClick(pet.text)} style={myStyle}>
            {pet.image}
            <span className="home-size-text" style={textStyle}>{pet.text}</span>
        </div>
    )
}

export default PetOption;