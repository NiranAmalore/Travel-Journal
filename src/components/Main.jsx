import React from "react"

export default function Main(props){
    return (
        <section className="entries">
            <img className="entry--img " src={`${props.image}`}/>
            <div className="entry-details">
                <div className="entry-location-stats">
                    <img className="location-icon" src="./src/images/location-icon.png"/>
                    <p className="section--location">{props.location}</p>
                    <p><a className="section--map-location" href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a></p>
                </div>
                <h1 className="section--header">{props.place}</h1>
                <h3 className="section--subheader">{props.startDate} - {props.endDate}</h3>
                <p className="section--description">{props.description}</p>
            </div>
        </section>
    )
}