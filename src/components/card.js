import React from "react"
import "./card.css"

export default function Card({ movie }) {
  return (
    <a href={'http://localhost:8000/'+movie.url} className="hyperlink">
      <article className="card">
        <section className="portada">
          <img
            src={movie.imagenPortada?.file.url}
            className="portada-img"
            alt={movie.imagenPortada?.description}
          />
        </section>
        <section className="movieData">
          <p className="title">{movie.titulo}</p>
          <p className="director">{movie.director}</p>
          <p className="publicationYear">{movie.publicationYear}</p>
        </section>
      </article>
    </a>
  )
}
