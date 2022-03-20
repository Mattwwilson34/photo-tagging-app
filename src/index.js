import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App';
import Game from './Components/Game';
import Levels from './Routes/Levels';
import Leaderboard from './Components/Leaderboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Levels />} />
          <Route path='game' element={<Game />} />
          <Route path='leaderboard' element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
