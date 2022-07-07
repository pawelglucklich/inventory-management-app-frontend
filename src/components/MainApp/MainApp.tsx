import React from "react";
import {MainAppLeftPanel} from "./LeftPanel/MainApp-LeftPanel";
import {MainAppMainScreen} from "./MainScreen/MainApp-MainScreen";
import {MainAppRightPanel} from "./RightPanel/MainApp-RightPanel";

import './MainApp.css';

export const MainApp = () => {
    return (
        <div className={'main-app'}>
            <MainAppLeftPanel/>
            <MainAppMainScreen/>
            <MainAppRightPanel/>
        </div>
    );
};
