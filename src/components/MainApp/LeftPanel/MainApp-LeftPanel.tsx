import React from "react";
import {Btn} from "../../common/Btn";

import './MainApp-LeftPanel.css';

export const MainAppLeftPanel = () => {
    return (
        <div className={'main-app-left-panel'}>
            <Btn click={'A'} text={'a'}/>
            <Btn click={'B'} text={'b'}/>
            <Btn click={'C'} text={'c'}/>
            <Btn click={'D'} text={'d'}/>
            <Btn text={'b1 hidden'}/>
            <Btn text={'b2 hidden'}/>
        </div>
    );
};
