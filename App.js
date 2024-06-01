import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsList from './PostsList';
import PostDetails from './PostDetails';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
