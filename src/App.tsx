import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookAILanding from './components/CookAI';

function App() {
    return (
        <Router>
            <Routes>
                {/* All routes handled by CookAILanding component */}
                <Route path="/" element={<CookAILanding />} />
                <Route path="/privacy" element={<CookAILanding />} />
                <Route path="/terms" element={<CookAILanding />} />
            </Routes>
        </Router>
    );
}

export default App;