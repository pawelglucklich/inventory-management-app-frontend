import React from "react";

import './LocationRightPanel.css';
import {Btn, clickEnum} from "../../common/Btn";

export const LocationRightPanel = () => {
    return (
        <div className={'main-app-right-panel'}>
            <Btn text={'b3 hidden'}/>
            <Btn click={clickEnum.k_cancel} text={'cancel'}/>
            <Btn click={clickEnum.k_7} text={'7'}/>
            <Btn click={clickEnum.k_8} text={'8'}/>
            <Btn click={clickEnum.k_9} text={'9'}/>
            <Btn click={clickEnum.k_4} text={'4'}/>
            <Btn click={clickEnum.k_5} text={'5'}/>
            <Btn click={clickEnum.k_6} text={'6'}/>
            <Btn click={clickEnum.k_1} text={'1'}/>
            <Btn click={clickEnum.k_2} text={'2'}/>
            <Btn click={clickEnum.k_3} text={'3'}/>
            <Btn text={'▲'}/>
            <Btn click={clickEnum.k_0} text={'0'}/>
            <Btn click={clickEnum.k_comma} text={','}/>
            <Btn text={'▼'}/>
            <Btn text={'ok'}/>
        </div>
    );
};
