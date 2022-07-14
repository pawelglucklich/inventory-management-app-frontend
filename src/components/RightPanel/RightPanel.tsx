import React from "react";
import {Link} from "react-router-dom";
import {actionEnum, Btn, clickEnum} from "../common/Btn";
import {useGlobalState} from "../utils/state";

import './RightPanel.css';


export const RightPanel = () => {
    const [action, setAction] = useGlobalState('okAction');
    const [val, setVal] = useGlobalState('screenValue');

    const handleOk = () => {
        if (action === actionEnum.locationListAll && val.length > 4) {
            return '/location/listAll';
        } else if (action === actionEnum.articleListAll && val.length > 4) {
            return '/article/listAll';
        }
        return actionEnum.doNothing;
    };

    return (
        <div className={'right-panel'}>
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
            <Btn text={'▲ hidden'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_0} text={'0'} action={actionEnum.doNothing}/>
            <Btn click={clickEnum.k_comma} text={', hidden'} action={actionEnum.doNothing}/>
            <Btn text={'▼ hidden'} action={actionEnum.doNothing}/>
            <Link to={handleOk()}>
                <button className={'ok btn'}>ok</button>
            </Link>
        </div>
    );
};
