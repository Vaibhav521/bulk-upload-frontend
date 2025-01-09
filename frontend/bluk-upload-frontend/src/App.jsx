import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const StudentDetailPage = lazy(() => import('./pages/StudentDetailPage'));
const UploadHistory = lazy(() => import('./pages/UploadHistory'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<StudentDetailPage />} />
        <Route path="/uploads" element={<UploadHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

