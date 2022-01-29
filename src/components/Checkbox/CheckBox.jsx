import React from 'react';

const CheckBox = ({id,title,onChecked,onUnChecked}) => {

    let idCheckbox = ((Math.random() * 10)).toString(20);
    const [checked, setChecked] = React.useState(false);
    const checkboxRef = React.createRef();

    const HandleSetChecked = (e) => {
        setChecked(e.target.checked);
        if(checked !== true) {
            onChecked({id:checkboxRef.current.value})
        } else {
            onUnChecked({id:checkboxRef.current.value})
        }
    }

    return (
        <div className="form-check">
            <input className="form-check-input"
                   type="checkbox"
                   ref={checkboxRef}
                   value={id}
                   id={idCheckbox}
                   defaultChecked={checked}
                   onChange={(e) => HandleSetChecked(e)}
            />
            <label className="form-check-label" htmlFor={idCheckbox}>
                {title}
            </label>
        </div>
    );
};

export default CheckBox;