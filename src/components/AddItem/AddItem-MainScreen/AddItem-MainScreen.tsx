import React, {SyntheticEvent, useState} from "react";

import './AddItem-MainScreen.css'

export const AddItemMainScreen = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        article: '',
        name: '',
        description: 'none',
        quantity: 1,
        location: '00000',
    });

    const saveAd = async (event: SyntheticEvent) => {
        event.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/item`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });
            const data = await res.json();
            setId(data.id);

        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2>Adding new Item...</h2>;
    }

    if (id) {
        return <h2>New Item "{form.name}" have been added to warehouse.</h2>;
    }

    return (
        <div className={'add-item-main-screen'}>

            <form action="" className="add-form" onSubmit={saveAd}>
                <h1>Add Item</h1>
                <p>
                    <label>
                        Article: <br/>
                        <input
                            type="text"
                            name="article"
                            required
                            minLength={5}
                            maxLength={5}
                            value={form.article}
                            onChange={event => updateForm('article', event.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Name: <br/>
                        <input
                            type={"text"}
                            name="name"
                            required
                            maxLength={20}
                            value={form.name}
                            onChange={event => updateForm('name', event.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Description: <br/>
                        <input
                            type="text"
                            name="description"
                            required
                            maxLength={20}
                            value={form.description}
                            onChange={event => updateForm('description', event.target.value)}
                        /> <br/>
                    </label>
                </p>
                <p>
                    <label>
                        Quantity: <br/>
                        <input
                            type="number"
                            name="quantity"
                            required
                            min={1}
                            max={999999}
                            maxLength={6}
                            value={form.quantity}
                            onChange={event => updateForm('quantity', Number(event.target.value))}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Location: <br/>
                        <input
                            type="text"
                            name="location"
                            required
                            minLength={5}
                            maxLength={5}
                            value={form.location}
                            onChange={event => updateForm('location', event.target.value)}
                        />
                    </label>
                </p>
                <button className={'submit btn'}>add item</button>
            </form>
        </div>
    );
}
