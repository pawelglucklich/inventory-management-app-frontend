import React, {SyntheticEvent, useState} from "react";

import './ItemMainScreen.css';
import {useGlobalState} from "../../utils/state";

export const ItemMainScreen = () => {
    const [val, setVal] = useGlobalState('screenValue');
    const [itemID, setItemID] = useGlobalState('itemID')

    const valScreen = (val[4] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . ${val[4]}`
            : val[3] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . _`
                : val[2] ? `${val[0]} ${val[1]} . ${val[2]} _ . _`
                    : val[1] ? `${val[0]} ${val[1]} . _ _ . _`
                        : val[0] ? `${val[0]} _ . _ _ . _`
                            : `_ _ . _ _ . _`
    );

    const updateLocation = async (event: SyntheticEvent) => {
        event.preventDefault();

            const res = await fetch(`http://localhost:3001/item/${itemID}/${val}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "location": val,
                }),
            });
    };

    return (
        <div className={'item-main-screen'}>
            <div className={'screen'}>
                <div className={'screen-name'}>
                    <span>row</span><span>lot</span><span>level</span>
                </div>
                <p className={'screen-val'}>{valScreen}</p>
                <form className={'item-form'} action={''} onSubmit={updateLocation}>
                    <button className={'submit btn'}>update location</button>
                </form>
            </div>
        </div>
    );
}
