import React from "react";

import './MainApp-RightPanel.css';
import {Btn} from "../../common/Btn";

export const MainAppRightPanel = () => {
    return (
        <div className={'main-app-right-panel'}>
            <Btn text={'b3 hidden'}/>
            <Btn click={'cancel'} text={'cancel'}/>
            <Btn click={'7'} text={'7'}/>
            <Btn click={'8'} text={'8'}/>
            <Btn click={'9'} text={'9'}/>
            <Btn click={'4'} text={'4'}/>
            <Btn click={'5'} text={'5'}/>
            <Btn click={'6'} text={'6'}/>
            <Btn click={'1'} text={'1'}/>
            <Btn click={'2'} text={'2'}/>
            <Btn click={'3'} text={'3'}/>
            <Btn text={'▲'}/>
            <Btn click={'0'} text={'0'}/>
            <Btn click={'.'} text={'.'}/>
            <Btn text={'▼'}/>
            <Btn text={'ok'}/>
        </div>
    );
};
