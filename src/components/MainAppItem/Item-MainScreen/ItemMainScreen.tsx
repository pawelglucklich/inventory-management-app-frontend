import React, {SyntheticEvent, useState} from "react";

import './ItemMainScreen.css';
import {useGlobalState} from "../../utils/state";

export const ItemMainScreen = () => {
    const [val, setVal] = useGlobalState('screenValue');
    const [loading, setLoading] = useState(false);
    const [itemID, setItemID] = useGlobalState('itemID')

    const valScreen = (val[4] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . ${val[4]}`
            : val[3] ? `${val[0]} ${val[1]} . ${val[2]} ${val[3]} . _`
                : val[2] ? `${val[0]} ${val[1]} . ${val[2]} _ . _`
                    : val[1] ? `${val[0]} ${val[1]} . _ _ . _`
                        : val[0] ? `${val[0]} _ . _ _ . _`
                            : `_ _ . _ _ . _`
    );

    const saveAd = async (event: SyntheticEvent) => {
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
            const data = await res.json();
            setItemID(data.id);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={'item-main-screen'}>
            <div className={'screen'}>
                <p>{valScreen}</p>
                <form action={''} onSubmit={saveAd}>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}
