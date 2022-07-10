import React, {useEffect, useState} from "react";
import {ItemEntity} from 'types';

import {useGlobalState} from "../utils/state";
import {LocationLeftPanel} from "../MainAppLocation/Location-LeftPanel/LocationLeftPanel";
import {LocationRightPanel} from "../MainAppLocation/Location-RightPanel/LocationRightPanel";

import './MainAppLocationListAll.css';

export const MainAppLocationListAll = () => {
    const [val, setVal] = useGlobalState('screenValue')
    const [items, setItems] = useState<ItemEntity[]>([]);

    useEffect(() => {
        (async () => {
            if (val.length < 5) {
                return '';
            } else {
                const res = await fetch(`http://localhost:3001/item/search/location/${val}`);
                const data = await res.json();
                setItems(data.items);
            }
        })();
    }, []);

    let n = 0;

    return (
        <div className={'location-list-all'}>
            <LocationLeftPanel/>
            <div className={'screen'}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                    </tr>
                    {
                        items.map(item => (
                                <tr key={item.id} tabIndex={n += 1}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                        ))
                    }
                </table>
            </div>
            <LocationRightPanel/>
        </div>
    );
}
