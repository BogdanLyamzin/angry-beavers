import React from 'react';
function InputForm(props) {
    const { type, name, value, onChange } = props
    return (
        <>
            <input type={type} name={name} value={value}  autoComplete="off" onChange={ e => onChange(e)}/>
        </>
    );
}

export default InputForm;