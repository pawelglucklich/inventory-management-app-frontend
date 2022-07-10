import React from "react";
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {LocationMainScreen} from "./Location-MainScreen/LocationMainScreen";
import {RightPanel} from "../RightPanel/RightPanel";

import './MainAppLocation.css';

export const MainAppLocation = () => {
    return (
        <div className={'main-app-location'}>
            <LeftPanel/>
            <LocationMainScreen/>
            <RightPanel/>
        </div>
    );
};
