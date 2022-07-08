import React from "react";
import {Route, Routes} from 'react-router-dom';
import {MainAppLeftPanel} from "./LeftPanel/MainApp-LeftPanel";
import {MainAppRightPanel} from "./RightPanel/MainApp-RightPanel";
import {MainAppMainScreen} from "./MainScreen/MainApp-MainScreen";
import {MainScreenInput} from "./MainScreen-Input/MainScreen-Input";

import './MainApp.css';

export const MainApp = () => {
    return (
        <div className={'main-app'}>
            <MainAppLeftPanel/>
            <Routes>
                <Route path={'/'} element={<MainAppMainScreen/>}/>
                <Route path={'/article'} element={<MainScreenInput/>}/>
            </Routes>
            <MainAppRightPanel/>
        </div>
    );
};
