import React from "react";

import './MainApp.css';
import {MainAppLeftPanel} from "./LeftPanel/MainApp-LeftPanel";
import {MainAppMainScreen} from "./MainScreen/MainApp-MainScreen";
import {MainAppRightPanel} from "./RightPanel/MainApp-RightPanel";

export const MainApp = () => {
    return (
        <div className={'main-app'}>
            <MainAppLeftPanel/>
            <MainAppMainScreen/>
            <MainAppRightPanel/>
        </div>
    );
};
