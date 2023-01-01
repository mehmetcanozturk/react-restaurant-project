import React from 'react'

export default function Navbar({ item, setItem }) {



    const fechItem = async () => {
        const res = await fetch(`https://random-data-api.com/api/restaurant/random_restaurant`)
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json();
        setItem([...item, data]);
    }


    return (
        <>
            <div className="navbar">
                <button onClick={fechItem}>Add New Restaurant</button>
            </div>
        </>
    )
}
