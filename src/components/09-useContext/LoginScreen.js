import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const user = {
        id: 123,
        name: 'Sebastián Silva',
        email: 'sebasilvac88@gmail.com'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => { setUser(user) }}
            >setUser</button>
        </div>
    )
}
