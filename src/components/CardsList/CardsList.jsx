import React from "react"
import { Card } from "../Card/Card";
import './CardList.css'
function CardList({movies}) {
    return (
        <div className="filmsList">
            {movies.map((film) => {
                return <Card key={film.imdbID} {...film} />
            })}
        </div>
    )
}


export { CardList }