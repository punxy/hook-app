import React, { useState } from 'react';
import '../effects.css'; 
import {useCounter} from '../../hook/useCounter'; 
import { Small } from './Small';

export const Memorize = () => {

    const [show, setShow] = useState(false);
    const {counter, increment } = useCounter(10);
    

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>

            <h2>Counter <Small value={counter} /> </h2>

            
            

            <div className="row">

                <div className="col-3">
                    <button
                        className='btn btn-primary mr-3'
                        onClick={increment}
                    >
                        Incrementar
                    </button>
                </div>

                <div className="col-5">
                    <button
                        className='btn btn-outline-primary ml-1'
                        onClick={ () => { setShow(!show) } }
                    >   
                        show/hide {JSON.stringify(show)}
                    </button>
                </div>
            </div>
        </div>
    )
}
