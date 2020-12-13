import React from 'react';
// import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ComingSoon from './pages/ComingSoon/ComingSoon';
// import LandingPage from './pages/LandingPage/LandingPage';

function App() {
    return (
        <>
            <Header />
            <ComingSoon />
            {/* <Route exact path="/">
                <ComingSoon />
            </Route>
            <Route exact path="/home">
                <LandingPage />
            </Route> */}
            <Footer />
        </>

    );
}

export default App;
