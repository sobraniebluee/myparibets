import React from 'react';

const SwitchBox = ({id,title,onSwitch}) => {

    let idCheckbox = ((Math.random() * 10)).toString(20);

    return (
        <div className="form-check form-switch">
            <input onChange={onSwitch} className="form-check-input" type="checkbox" role="switch" id={idCheckbox} />
            <label className="form-check-label" htmlFor={idCheckbox}>
                    {title} FREEBETS
            </label>
        </div>
    );
};

export default SwitchBox;