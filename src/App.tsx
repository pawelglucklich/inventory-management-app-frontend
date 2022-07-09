import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Footer} from './components/layout/Footer';
import {MainAppLocation} from "./components/MainAppLocation/MainAppLocation";
import {MainAppArticle} from "./components/MainAppArticle/MainAppArticle";
import {Header} from "./components/layout/Header";
import {LocationListAll} from "./components/MainAppLocation/Location-ListAll/LocationListAll";

export const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/article'} element={<MainAppArticle/>}/>
                <Route path={'/'} element={<MainAppLocation/>}/>
                <Route path={'/location/listAll'} element={<LocationListAll/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
