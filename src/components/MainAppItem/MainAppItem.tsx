import React from "react";
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {ItemMainScreen} from "./Item-MainScreen/ItemMainScreen";
import {RightPanel} from "../RightPanel/RightPanel";

import './MainAppItem.css';

export const MainAppItem = () => {
    return (
        <div className={'main-app-item'}>
            <LeftPanel/>
            <ItemMainScreen/>
            <RightPanel/>
        </div>
    );
}
