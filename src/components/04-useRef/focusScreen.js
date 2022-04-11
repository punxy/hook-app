import React, { useRef } from 'react';
import '../effects.css';

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        //document.querySelector('input').focus();
        inputRef.current.focus();
    }

    
    return (
         <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={inputRef}
                className='form-control' 
                placeholder='Su nombre'
            />

            <button 
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    )
}
