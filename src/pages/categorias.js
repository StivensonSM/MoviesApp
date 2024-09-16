import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CategoryInfo from "../components/categoryInfo"

const CategoryIndexPage = ({ data }) => (
  <Layout>
    <h1>Movies Category</h1>
    <div className="CategoryIndexPage">
      {data.allContentfulCategory.edges.map(({ node, index }) => {
        return <CategoryInfo category={node} id={`movie-card-${index}`} />
      })}
    </div>
  </Layout>
)

export default CategoryIndexPage

export const query = graphql`
query CategoriasQuery {
    allContentfulCategory {
        edges {
            node {
                titulo
                peliculas {
                    titulo
                    url
                    publicationYear
                    director
                    imagenPortada {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
}
`