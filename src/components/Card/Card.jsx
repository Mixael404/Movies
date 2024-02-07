import React, { Component } from "react"
import "./Card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {this.props.Poster === "N/A" ? <img className="activator" src='https://placehold.co/600x400'/> : <img className="activator" src={this.props.Poster} />}
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"> {this.props.Title} <i className="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                </div>
            </div>
        )
    }
}

export { Card }