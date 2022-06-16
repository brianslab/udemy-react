import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [ open, setOpen ] = useState(false);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                onClick={() => onSelectedChange(option)}
                className="item"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div
                    className={`ui selection dropdown ${open
                        ? 'visible active'
                        : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
