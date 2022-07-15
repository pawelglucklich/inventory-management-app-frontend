import React, {SyntheticEvent, useState} from "react";
import {useGlobalState} from "../../utils/state";

import './ItemMainScreen.css';

export const ItemMainScreen = () => {
    const [val, setVal] = useGlobalState('screenValue');
    const [itemID, setItemID] = useGlobalState('itemID');
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState('');

    const valScreen = (val[4] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . ${val[4]}`
            : val[3] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . _`
                : val[2] ? `${val[0]} ${val[1]} . ${val[2]} _ . _`
                    : val[1] ? `${val[0]} ${val[1]} . _ _ . _`
                        : val[0] ? `${val[0]} _ . _ _ . _`
                            : `_ _ . _ _ . _`
    );

    const updateLocation = async (event: SyntheticEvent) => {
        event.preventDefault();

        setLoading(true);

        try {

            const res = await fetch(`http://localhost:3001/item/${itemID}/${val}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "location": val,
                }),
            });
            const data = res.status.toString();
            setOk(data);

        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className={'item-main-screen'}>
                <h2>Updating location...</h2>
            </div>
        )
    }

    if (ok === '200') {
        return (
            <div className={'item-main-screen'}>
                <h2>Location has been updated to {val[0]}{val[1]}.{val[2]}{val[3]}.{val[4]}.</h2>
            </div>
        )
    }

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
