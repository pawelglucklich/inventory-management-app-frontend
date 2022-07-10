import React from "react";

import './ArticleRightPanel.css';
import {actionEnum, Btn, clickEnum} from "../../common/Btn";

export const ArticleRightPanel = () => {
    return (
        <div className={'article-right-panel'}>
            <Btn text={'b3 hidden'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_cancel} text={'cancel'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_7} text={'7'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_8} text={'8'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_9} text={'9'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_4} text={'4'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_5} text={'5'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_6} text={'6'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_1} text={'1'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_2} text={'2'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_3} text={'3'} action={actionEnum.doNothing}/>
            <Btn text={'▲'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_0} text={'0'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_comma} text={','} action={actionEnum.doNothing}/>
            <Btn text={'▼'} action={actionEnum.doNothing}/>
            <Btn text={'ok'} action={actionEnum.doNothing}/>
        </div>
    );
};
