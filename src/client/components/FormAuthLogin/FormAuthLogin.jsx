import InputForm from '../../../shared/component/Input';
import React from 'react';
import { input as inputOptions } from './field'
import { useForm } from "../../../shared/hooks/useForm"
import { useState } from 'react';
import { initialState } from './initialState';

function FormAuthLogin(props) {
    const [state,setState] = useState(initialState)

    const [dataForm,setDataForm,handleChange,handleSubmit] = useForm(state,onSubmit)

    function onSubmit(data){
        console.log(data);
    }

    function reset() {
        setState(...state)
    }
    // const [userInfo, setUserInfo] = useState(initialState)
    
    // const handleChange = ({ target }) => {
    //     const { name, value } = target
    //     setUserInfo({...userInfo,[name]:value})
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(userInfo);
    // }

    const input = inputOptions.map(item => <InputForm {...item} onChange={handleChange} />)
        return (
        <form onSubmit={ e => handleSubmit(e)}>
                {input}
                <button type="submit">Submit</button>
        </form>  
    )
}

export default FormAuthLogin;