import React, {useEffect, useState} from "react";
import {ItemEntity} from 'types';
import {LeftPanel} from "../LeftPanel/LeftPanel";
import {useGlobalState} from "../utils/state";
import {RightPanel} from "../RightPanel/RightPanel";
import {Link} from "react-router-dom";

import './MainAppLocationListAll.css';

export const MainAppLocationListAll = () => {
    const [val, setVal] = useGlobalState('screenValue')
    const [items, setItems] = useState<ItemEntity[]>([]);
    const [itemID, setItemID] = useGlobalState('itemID');

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
            <LeftPanel/>
            <div className={'screen'}>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Loc.</th>
                        <th>Desc.</th>
                        <th>Quan.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id} tabIndex={n += 1} id={item.id} onFocus={() => {setItemID(item.id)}}>
                                <td>
                                    <button className={'item-link'}><Link to={'/item'} onClick={() => {setVal('')}}>{item.name}</Link></button>
                                </td>
                                <td>{item.location}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <RightPanel/>
        </div>
    );
}
