import React from "react";
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {RightPanel} from "../RightPanel/RightPanel";
import {AddItemMainScreen} from "./AddItem-MainScreen/AddItem-MainScreen";

import './AddItem.css';

export const AddItem = () => {
    return (
        <div className={'add-item'}>
            <LeftPanel/>
            <AddItemMainScreen/>
            <RightPanel/>
        </div>
    );
}
