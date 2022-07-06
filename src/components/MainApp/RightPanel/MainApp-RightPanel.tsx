import React from "react";

import './MainApp-RightPanel.css';
import {Btn} from "../../common/Btn/Btn";

export const MainAppRightPanel = () => {
    return (
        <div className={'main-app-right-panel'}>
            <Btn text={'b3'}/>
            <Btn text={'cancel'}/>
            <Btn text={'7'}/>
            <Btn text={'8'}/>
            <Btn text={'9'}/>
            <Btn text={'4'}/>
            <Btn text={'5'}/>
            <Btn text={'6'}/>
            <Btn text={'1'}/>
            <Btn text={'2'}/>
            <Btn text={'3'}/>
            <Btn text={'▲'}/>
            <Btn text={'0'}/>
            <Btn text={'.'}/>
            <Btn text={'▼'}/>
            <Btn text={'ok'}/>
        </div>
    );
};
