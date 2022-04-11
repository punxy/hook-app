import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks';
import '../effects.css';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }


            <button className='btn tbn-primary' onClick={() => setShow(!show)}>show/hide</button>
            
        </div>
    )
}
