import React from 'react';
import '../../SCSS/CustomizeColumn.scss';

const CustomizeColumn = (props) => {
    return (
        <div className="column-container">
            {props.children}
        </div>
    );
};

export default CustomizeColumn;