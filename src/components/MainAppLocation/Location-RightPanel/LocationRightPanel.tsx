import React from "react";
import {Link} from "react-router-dom";
import {actionEnum, Btn, clickEnum} from "../../common/Btn";

import './LocationRightPanel.css';
import {useGlobalState} from "../../utils/state";


export const LocationRightPanel = () => {
    const [action, setAction] = useGlobalState("okAction");

    const handleOk = () => {
        if (action === '1') {
            return '/location/listAll';
        } else if (action === '2') {
            return '/';
        }
        return '0';
    };

    return (
        <div className={'location-right-panel'}>
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
            <Link to={handleOk()}>
                <button className={'ok btn'}>ok</button>
            </Link>
        </div>
    );
};
