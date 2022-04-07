import React from 'react';
import { Routes, Route, Outlet, BrowserRouter as Router } from "react-router-dom";

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
          <Route path="/register" element={<Register />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="/search/:movie_search_input" element={<SearchResult />} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          <Route path="/user"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
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
    <div className="App">
      <Header />
      <div id="postheader">&nsbsp;</div>
      <Outlet />
      <div id="prefooter">&nbsp;</div>
      <Footer />
    </div>
  );
}
