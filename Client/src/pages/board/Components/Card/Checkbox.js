import React from 'react';

const Checkbox = (props) => {
    return (
        <input
            className={props.className}
            onClick={props.onClick}
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange} />
    );
}

export default Checkbox;