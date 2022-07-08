import React from "react";
import {useGlobalState} from "../../utils/state";

import './MainScreen-Input.css';


export const MainScreenInput = () => {
    const [val, setVal] = useGlobalState('screenValue')

    return (
        <div className={'main-screen-input'}>
            <div className={'screen'}>
                <p>{val}</p>
            </div>
        </div>
    );
};
