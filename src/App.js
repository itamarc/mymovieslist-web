import React from 'react';
import { Routes, Route, Outlet, BrowserRouter as Router } from "react-router-dom";

import { AuthProvider, RequireAuth } from "./nav/auth";

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import MovieLists from './pages/MovieLists';
import UserData from './pages/UserData';

import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router><Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MovieLists />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <RequireAuth>
                <UserData />
              </RequireAuth>
            }
          />
        </Route>
      </Routes></Router>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
