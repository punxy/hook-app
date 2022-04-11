import React, { useMemo, useState } from 'react';
import {useCounter} from '../../hook/useCounter'; 
import { procesoPesado } from '../../helpers/procesoPesado';
import '../effects.css'; 

export const MemoHook = () => {

    const [show, setShow] = useState(false);
    const {counter, increment } = useCounter(5000);

    const mempProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>

            <h2>Counter: { counter } </h2>

            <p>{mempProcesoPesado}</p>


            <div className="row">

                <div className="col-1">
                    <button
                        className='btn btn-primary'
                        onClick={increment}
                    >+1</button>
                </div>

                <div className="col-5 ml-3">
                    <button
                        className='btn btn-outline-primary'
                        onClick={ () => { setShow(!show) } }
                    >   
                        show/hide {JSON.stringify(show)}
                    </button>
                </div>
            </div>
        </div>
    )
}
