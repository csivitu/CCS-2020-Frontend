import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div>
            <Header />
            <Route exact path="/">
                <ComingSoon />
            </Route>
            <Route exact path="/home">
                <HomePage />
            </Route>
            <Footer />
        </div>

    );
}

export default App;
