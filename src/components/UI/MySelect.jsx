import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaulValue, value, onChange}) => {
    return (
        <select className={classes.MySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaulValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;