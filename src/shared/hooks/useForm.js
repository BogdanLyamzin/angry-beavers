import { useState } from "react";

export const useForm = (initialState, onSubmit = () => { } ) => {
    const [dataForm, setDataForm] = useState(initialState);
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDataForm({...dataForm, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(dataForm);
        setDataForm(initialState)
    }

    return [dataForm,setDataForm,handleChange,handleSubmit]
}
