import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Footer} from './components/layout/Footer';
import {MainAppLocation} from "./components/MainAppLocation/MainAppLocation";
import {MainAppArticle} from "./components/MainAppArticle/MainAppArticle";
import {Header} from "./components/layout/Header";

export const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/article'} element={<MainAppArticle/>}/>
                <Route path={'/'} element={<MainAppLocation/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
