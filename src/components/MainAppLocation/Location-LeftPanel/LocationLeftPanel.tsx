import React from "react";
import {Btn, clickEnum} from "../../common/Btn";

import './LocationLeftPanel.css';

export const LocationLeftPanel = () => {
    return (
        <div className={'location-left-panel'}>
            <Btn click={clickEnum.k_a} text={'a'}/>
            <Btn click={clickEnum.k_b} text={'b'}/>
            <Btn click={clickEnum.k_c} text={'c'}/>
            <Btn click={clickEnum.k_d} text={'d'}/>
            <Btn text={'b1 hidden'}/>
            <Btn text={'b2 hidden'}/>
        </div>
    );
};
