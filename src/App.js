import React from 'react';
import { Routes, Route, Outlet, BrowserRouter as Router } from "react-router-dom";
import { Container } from '@mui/material';

import { AuthProvider, RequireAuth } from "./nav/auth";

import Header from './components/Header';
import Footer from './components/Footer';
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';

import Login from './pages/Login';
import MoviesLists from './pages/MoviesLists';
import MoviesList from './pages/MoviesList';
import Profile from './pages/Profile';
import About from './pages/About';
import Register from './pages/Register';
import SearchResult from './pages/SearchResult';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router><Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MoviesLists />} />
          <Route path="/movies-lists/:moviesListId" element={<MoviesList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          <Route path="/user/:userId" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path="/user" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>"That's not the page you're looking for!"<br/>- Kenobi, Obi-Wan</p>
              </main>
            }
          />
        </Route>
      </Routes></Router>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <div id="prefooter">&nbsp;</div>
    <Footer />
    </>
  );
}
