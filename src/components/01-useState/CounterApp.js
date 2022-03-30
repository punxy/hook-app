import React from 'react';
import { useCounter } from '../../hook/useCounter';
import './counterApp.css';

export const CounterApp = () => {

    const {state, increment, decrement, reset} = useCounter(10);

    return (
        <>
            <h1>Counter with hook {state}</h1>
            <hr />

            <button onClick={ ()  => decrement(1)} className='btn btn-primary' > -1 </button>
            <button onClick={ reset } className='btn btn-default' >reset</button>
            <button onClick={ ()  => increment(1)} className='btn btn-secondary'> +1 </button>
        </>
    )
}
