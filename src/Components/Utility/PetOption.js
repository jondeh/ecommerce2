import React, { useState, useEffect, useContext } from 'react';
import { CustomContext } from '../../context/CustomContext';

const PetOption = ({ pet }) => {
    const { whoPets, setWhoPets, handlePetClick } = useContext(CustomContext);
    // const [whoPets, setWhoPets] = useState([])

    const [myStyle, setMyStyle] = useState({boxShadow: whoPets.includes(pet.text) && "0px 0px 5px 3px #ACE1AF"});


    useEffect(() => {
        setMyStyle({boxShadow: whoPets.includes(pet.text) && "0px 0px 5px 3px #ACE1AF"})
    }, [whoPets]);

    return (
        <div className="pet" onClick={() => handlePetClick(pet.text)} style={myStyle}>
            {pet.image}
            <span className="home-size-text">{pet.text}</span>
        </div>
    )
}

export default PetOption;