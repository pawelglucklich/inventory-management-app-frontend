import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Footer} from './components/layout/Footer';
import {MainAppLocation} from "./components/MainAppLocation/MainAppLocation";
import {MainAppArticle} from "./components/MainAppArticle/MainAppArticle";
import {Header} from "./components/layout/Header";
import {MainAppLocationListAll} from "./components/MainAppLocationListAll/MainAppLocationListAll";
import {MainAppArticleListAll} from "./components/MainAppArticleListAll/MainAppArticleListAll";

export const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainAppArticle/>}/>
                <Route path={'/location'} element={<MainAppLocation/>}/>
                <Route path={'/location/listAll'} element={<MainAppLocationListAll/>}/>
                <Route path={'/article/listAll'} element={<MainAppArticleListAll/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
