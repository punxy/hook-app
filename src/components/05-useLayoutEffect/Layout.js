import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch';
import './layout.css';

export const Layout = () => {
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    const { counter, increment} = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]); 


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className='blockquote text-end'>
                <p className='mb-0' ref={pTag}>{ quote }</p>
            </blockquote>

            <button className='btn btn-primary' onClick={increment} disabled={ loading } >
                Siguiente quote
            </button>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
        </div>
    )
}
