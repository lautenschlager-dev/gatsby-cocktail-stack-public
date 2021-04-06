import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../components/layouts/Default"
import CocktailsTable from "../components/common/CocktailsTableNoLimit"

const Country = ({ pageContext: { id }, data, location }) => {
  let cocktails = data.allCocktails.nodes

  cocktails.forEach(cocktail => {
    cocktail.ingredients = []
    cocktail.ingredients.push(cocktail.strIngredient1)
    cocktail.ingredients.push(cocktail.strIngredient2)
    cocktail.ingredients.push(cocktail.strIngredient3)
    cocktail.ingredients.push(cocktail.strIngredient4)
    cocktail.ingredients.push(cocktail.strIngredient5)
    cocktail.ingredients.push(cocktail.strIngredient6)
    cocktail.ingredients.push(cocktail.strIngredient7)
    cocktail.ingredients.push(cocktail.strIngredient8)
    cocktail.ingredients.push(cocktail.strIngredient9)
    cocktail.ingredients.push(cocktail.strIngredient10)
    cocktail.ingredients.push(cocktail.strIngredient11)
  })

  let cocktailsFilterded = cocktails.filter(cocktail =>
    cocktail.ingredients.includes(id)
  )

  return (
    <Layout
      title={`Cocktails with ${id} | Cocktail Stack`}
      desc={`A list of cocktails with ${id}`}
      path={location.pathname}
    >
      <h1 className="mb-5 text-2xl leading-relaxed sm:text-3xl lg:text-4xl font-extrabold text-gray-200 text-center">
        All Cocktails with <span className="underline">{id}</span>
      </h1>
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="bg-gray-50 rounded-md shadow px-6 flex space-x-4 mx-auto">
          <li className="flex">
            <div className="flex items-center">
              <Link to="/" className="text-gray-400 hover:text-gray-500">
                {/* Heroicon name: home */}
                <svg
                  className="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
              <span className="sr-only">Home</span>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center space-x-4">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                to="/ingredients"
                className="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
              >
                Ingredients
              </Link>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center space-x-4">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <span className="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                {id}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <CocktailsTable cocktails={cocktailsFilterded} />
    </Layout>
  )
}

export default Country

export const query = graphql`
  query {
    allCocktails {
      nodes {
        id
        strDrink
        strCategory
        strAlcoholic
        strIngredient10
        strIngredient1
        strIngredient11
        strIngredient2
        strIngredient3
        strIngredient4
        strIngredient5
        strIngredient6
        strIngredient7
        strIngredient8
        strIngredient9
      }
    }
  }
`
