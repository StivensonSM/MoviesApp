import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Movies List</h1>
    <div className="indexPage">
      {data.allContentfulMovie.edges.map(({ node, index }) => {
        return <Card movie={node} id={`movie-card-${index}`} />
      })}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
  allContentfulMovie {
    edges {
      node {
        titulo
        url
        descripcion {
          raw
        }
        imagenPortada {
          file {
            url
          }
        }
        publicationYear
        director
      }
    }
  }
}
`