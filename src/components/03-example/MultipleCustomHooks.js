import React from 'react';
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const { counter, increment} = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )   :
                    (
                        <div className='text-end'>
                            <blockquote className='blockquote'>
                                <p className='mb-0'>{ quote }</p>
                            </blockquote>
                            <figcaption className='blockquote-footer'>{author}</figcaption>
                        </div>
                    )
            }

            <button className='btn btn-primary' onClick={increment} disabled={ loading } >
                Siguiente quote
            </button>
        </div>
    )
}
