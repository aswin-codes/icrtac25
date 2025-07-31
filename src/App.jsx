import React from 'react';
import ICRTAC25 from './pages/Home/page';
import ICRTAC24 from './pages/ICRTAC24/page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ICRTAC25/>} />
                <Route path="/2024" element={<ICRTAC24/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
