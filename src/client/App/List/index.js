import React, { useState, useEffect } from 'react';

function List() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            let resp = await fetch('http://localhost:5000/api/items');
            let data = await resp.json();
            setItems(data);
        })();
    }, []);

    return (
        <ul>
            {items.map((item, idx) => (
                <li key={ `${item.name}-${idx}` }>
                    { item.name }
                </li>
            ))}
        </ul>
    );
}

export default List;
