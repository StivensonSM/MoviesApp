/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */


const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return new Promise((resolve, reject) => {
		const moviesTemplate = path.resolve(
			'src/components/templates/movieTemplate.js'
		)
		resolve(
			graphql(`
				{
					allContentfulMovie {
            edges {
              node {
                titulo
                url
                descripcion {
                  raw
                }
                imagenPortada {
                  description
                  file {
                    url
                  }
                }
                publicationYear
                director
                duration
              }
            }
          }
				}
			`).then(result => {
				if (result.errors) {
					reject(result.errors)
				}
				result.data.allContentfulMovie.edges.forEach(edge => {
					createPage({
						path: edge.node.url,
						component: moviesTemplate,
						context: {
							url: edge.node.url,
							params: edge.node,
							next: edge.next,
							prev: edge.previous,
						},
					})
				})
				return
			})
		)
	})
}