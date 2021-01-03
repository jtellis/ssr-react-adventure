import React, { useState } from 'react';

function ItemForm() {
    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                required
            />
            <input type="submit" value="Save" />
        </form>
    );

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams( new FormData(e.target) )
        });
    }
}

export default ItemForm;
