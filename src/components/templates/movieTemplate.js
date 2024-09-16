import React from "react";
import Layout from "../layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { options } from "../../utils/options";
import "../../styles/movies-page.css";

export default function MoviesPage({pageContext}) {
  const {params} = pageContext
  return (
    <Layout>
        <section className="movie-header">
            <div className="movie-header-cover">
                <img
                src={params.imagenPortada?.file.url}
                className="movie-header-cover-img"
                alt={params.imagenPortada?.description}
                />
            </div>

            <div className="movie-header-data">
                <h1 className="movie-header-data-title">
                {params.titulo}
                </h1>

                <div className="movie-header-data-description">
                    {renderRichText(params.descripcion, options)}
                </div>
                <div className="movie-header-data-info">
                    {params.director && (
                        <p className="movie-header-data-artist">
                        <b className="font-bold">Dirigida por: </b>
                            {params.director}
                        </p>
                    )}
                    <p className="movie-header-data-duration">
                        {params.duration}
                    </p>
                    <p className="movie-header-data-publication-year">
                        {params.publicationYear}
                    </p>
                </div>
            </div>
        </section>

    </Layout>
    );
}

