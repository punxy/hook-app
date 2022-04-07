import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        // console.log('Hey!');
    }, []);

    useEffect( () => {
        // console.log('el formulario ha cambiado!');
    }, [formState]);

    useEffect( () => {
        // console.log('el email ha cambiado!');
    }, [email]);

    const handleInputChange = ({target}) => {  
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

  return (
    <>
        <h1>useEffect</h1>
        <hr />

        <div className='form-group'>
            <input
                type="text"
                name='name'
                className='form-control'
                placeholder='Your name'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />
        </div>

        <div className='form-group'>
            <input
                type="text"
                name='email'
                className='form-control'
                placeholder='your@email.com'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            />
        </div>

        { name === 'Seba' && <Message /> }
    </>
  )
}
