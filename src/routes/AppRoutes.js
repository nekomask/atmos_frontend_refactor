import React from 'react';
import { Routes, Route } from "react-router-dom";

import LandingPage from '../pages/LandingPage';
import ResultsPage from '../pages/ResultsPage';

/**
 * Returns all defined routes for links throughout application.
 * @param {Object} props React props object. 
 * @returns Routes JSX for react-router-dom links.
 */
 function AppRoutes(props) {
    return (
        <Routes>
            {/* <Route exact path='/' element={<LandingPage />} />  */}
            <Route exact path='/' element={<ResultsPage />} />
        </Routes>
    );
}

export default AppRoutes;