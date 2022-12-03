import React from "react"
import pin from "../assets/pin.png"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card-image" />
            <div className="card-info">
                <div className="location">
                    <img src={pin} className="pin" />
                    <span className="country">{props.item.location}</span>
                    <a href={`${props.googleMapsUrl}`} className="google-link" target="_blank">View on Google Maps</a>
                </div>
                <div className="title-description">
                    <h1>{props.item.title}</h1>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p>{props.item.description}</p>

                </div>
            </div>
        </div>
    )
}