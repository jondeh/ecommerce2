import React, { useContext } from 'react';
import '../../SCSS/CustomizeColumn.scss';

const CustomizeColumn = (props, { homeAnswer }) => {
    console.log("HOME ANSWER: ", homeAnswer)
    return (
        <div className="column-container">
            {props.children}
        </div>
    );
};

export default CustomizeColumn;