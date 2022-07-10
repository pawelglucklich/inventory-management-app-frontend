import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/layout/Header";
import {Footer} from './components/layout/Footer';
import {MainAppArticle} from "./components/MainAppArticle/MainAppArticle";
import {MainAppLocation} from "./components/MainAppLocation/MainAppLocation";
import {MainAppLocationListAll} from "./components/MainAppLocationListAll/MainAppLocationListAll";
import {MainAppArticleListAll} from "./components/MainAppArticleListAll/MainAppArticleListAll";
import {MainAppItem} from "./components/MainAppItem/MainAppItem";

export const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainAppArticle/>}/>
                <Route path={'/location'} element={<MainAppLocation/>}/>
                <Route path={'/location/listAll'} element={<MainAppLocationListAll/>}/>
                <Route path={'/article/listAll'} element={<MainAppArticleListAll/>}/>
                <Route path={'/item'} element={<MainAppItem/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
