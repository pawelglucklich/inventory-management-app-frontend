import React from "react";
import {Btn} from "../../common/Btn/Btn";

import './MainApp-LeftPanel.css';

export const MainAppLeftPanel = () => {
    return (
        <div className={'main-app-left-panel'}>
            <Btn text={'a'}/>
            <Btn text={'b'}/>
            <Btn text={'c'}/>
            <Btn text={'d'}/>
            <Btn text={'b1'}/>
            <Btn text={'b2'}/>
        </div>
    );
};
