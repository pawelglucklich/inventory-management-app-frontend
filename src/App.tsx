import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import {Header} from "./components/layout/Header";
import {MainApp} from "./components/MainApp/MainApp";

export const App = () => {

    return (
        <>
            <Header></Header>
            <MainApp></MainApp>
            {/*<Routes>*/}
            {/*    <Route path="/" element={''}/>*/}
            {/*</Routes>*/}
            <Footer></Footer>
        </>
    );
}
