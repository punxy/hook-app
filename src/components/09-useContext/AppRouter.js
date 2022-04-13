import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className='container-fluid'>
                    {/* Version 6 */}
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="login" element={<LoginScreen />} />
                        <Route path="about" element={<AboutScreen />} />
                        <Route path='*' element={<HomeScreen />} />
                    </Routes>
                    {/* Version 5
                        <Switch>
                        <Route exact path='/' component={ HomeScreen }/>
                        <Route exact path='/about' component={ AboutScreen }/>
                        <Route exact path='/login' component={ LoginScreen }/>
                    </Switch> */}
                </div>
            </div>
        </Router>
    )
}
