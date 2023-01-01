import React from 'react'

function Restaurant({ item }) {

    return (
        <>
            <div className="container" id={item.uid} >
                <div className="restaurant">
                    <div className="logo">
                        <img src={item.logo} alt='' />
                    </div>

                    <div className="detail">

                        <div className="title">
                            <h1 className="name">{item.name}</h1>
                            <h3 className="type">{item.type}</h3>
                        </div>
                        <div className="divader"></div>


                        <div className="adress"> <i className="fa-solid fa-location-dot"></i>
                            {item.address}</div>
                        <div className="phone"> <i className="fa fa-phone"></i>
                            {item.phone_number}</div>
                        <div className="desc">{item.description.slice(0, 100)}</div>
                        <div className="day-title">Reservation</div>
                        <div className="days">
                            {Object.keys(item.hours).map(day =>
                                <button className='day'
                                    style={{
                                        opacity: item.hours[day].is_closed ? "0.1" : "1",
                                        cursor: item.hours[day].is_closed ? "default" : "pointer",
                                    }}>{day}</button>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant