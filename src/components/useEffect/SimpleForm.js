import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    
    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log(email);
     }, [ email ])
    
    const handleOnChange = ( { target }) => {

        setformState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
        <h1>Effect</h1>
        <hr />
        <div className="form-group">
            <input
            name="name"
            type="text"
            value={ name }
            placeholder="name"
            onChange={ handleOnChange }
            className="form-control"
            />

            <input
            name="email"
            type="text"
            value={ email }
            placeholder="email"
            onChange={ handleOnChange }
            className="form-control"
            />

        </div>
        
        </>
    )
}
