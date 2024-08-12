import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './views/details/details';
import List from './views/list/list';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
