import React from "react";
import {Btn} from "../../common/Btn";

import './MainApp-LeftPanel.css';

export const MainAppLeftPanel = () => {
    return (
        <div className={'main-app-left-panel'}>
            <Btn text={'a'}/>
            <Btn text={'b'}/>
            <Btn text={'c'}/>
            <Btn text={'d'}/>
            <Btn text={'b1 hidden'}/>
            <Btn text={'b2 hidden'}/>
        </div>
    );
};
