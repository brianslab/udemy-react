import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
    { label: 'Afrikaans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' }
];

const Translate = () => {
    const [ language, setLanguage ] = useState(options[0]);

    return (
        <div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
        </div>
    );
};

export default Translate;
