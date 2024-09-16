import React from "react";
import Card from "../components/card";
import "./categoryInfo.css"


export default function CategoryInfo({ category }) {
    return (
        <div className="categoryInfo">
                <h2 className="categoryInfo-title">{category.titulo}</h2>
                {category.peliculas?.length > 0 ? (
                category.peliculas?.map(( movie, index ) => {
                return <Card movie={movie} id={`movie-card-${index}`} />;
                })
                ) : (
                    <p className="categoryInfo-notFound">
                        No tenemos películas de esta cátegoría para mostrar en este momento.
                    </p>
                )}
            </div>
            
    );
}
