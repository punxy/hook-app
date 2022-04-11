import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../effects.css'; 

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        /**
         * si la dependencia del useEffect es la función increment,
         * y esta función no está usando el useCallback y no está quedando memorizada
         * el useEffect también se estaría ejecutando cada vez
         */
    }, [increment]);
    


    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    )
}
