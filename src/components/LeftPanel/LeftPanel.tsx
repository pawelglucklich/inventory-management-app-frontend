import React from "react";
import {actionEnum, Btn, clickEnum} from "../common/Btn";

import './LeftPanel.css';

export const LeftPanel = () => {
    return (
        <div className={'left-panel'}>
            <Btn click={clickEnum.k_a} text={'a'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_b} text={'b'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_c} text={'c'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_d} text={'d'} action={actionEnum.doNothing}/>
            <Btn text={'b1 hidden'} action={actionEnum.doNothing}/>
            <Btn text={'b2 hidden'} action={actionEnum.doNothing}/>
        </div>
    );
};
