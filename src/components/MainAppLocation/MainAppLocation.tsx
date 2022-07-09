import React from "react";
import {LocationLeftPanel} from "./Location-LeftPanel/LocationLeftPanel";
import {LocationMainScreen} from "./Location-MainScreen/LocationMainScreen";
import {LocationRightPanel} from "./Location-RightPanel/LocationRightPanel";

import './MainAppLocation.css';

export const MainAppLocation = () => {
    return (
        <div className={'main-app-location'}>
            <LocationLeftPanel/>
            <LocationMainScreen/>
            <LocationRightPanel/>
        </div>
    );
};
