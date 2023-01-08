import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hooks from './Components/Hooks';
import Fetch from './Components/Fetch';
import Peaks from './Components/Peaks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="peaks" element={<Peaks />} />
        </Routes>
    </BrowserRouter>
);

