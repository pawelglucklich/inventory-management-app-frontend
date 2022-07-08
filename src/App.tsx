import React from 'react';
import {Footer} from './components/layout/Footer';
import {Header} from "./components/layout/Header";
import {MainApp} from "./components/MainApp/MainApp";

export const App = () => {

    return (
        <>
            <Header/>
            <MainApp/>
            <Footer/>
        </>
    );
}
