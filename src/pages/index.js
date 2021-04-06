import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "./../components/layouts/Default"
import SeachInput from "./../components/common/SeachInput"
import CocktailsTable from "../components/common/CocktailsTable"

export default function Page({ location }) {
  const data = useStaticQuery(graphql`
    query {
      allCocktails {
        nodes {
          id
          strDrink
          strCategory
          strAlcoholic
          strIngredient1
          strIngredient2
          strIngredient3
          strIngredient4
          strIngredient5
          strIngredient6
          strIngredient7
          strIngredient8
          strIngredient9
          strIngredient10
          strIngredient11
        }
      }
    }
  `)

  let cocktails = data.allCocktails.nodes

  cocktails.forEach(cocktail => {
    cocktail.ingredients = []

    const pushIngredient = prop => {
      if (prop) cocktail.ingredients.push(prop.toLowerCase())
    }

    pushIngredient(cocktail.strIngredient1)
    pushIngredient(cocktail.strIngredient2)
    pushIngredient(cocktail.strIngredient3)
    pushIngredient(cocktail.strIngredient4)
    pushIngredient(cocktail.strIngredient5)
    pushIngredient(cocktail.strIngredient6)
    pushIngredient(cocktail.strIngredient7)
    pushIngredient(cocktail.strIngredient8)
    pushIngredient(cocktail.strIngredient9)
    pushIngredient(cocktail.strIngredient10)
    pushIngredient(cocktail.strIngredient11)

    cocktail.search = `${cocktail.strDrink} ${cocktail.strCategory} ${
      cocktail.strAlcoholic
    } ${cocktail.ingredients.join(" ")} `
  })

  const [keyword, setKeyword] = useState("")
  const regex = new RegExp(keyword, "gi")

  const filteredCocktails = cocktails.filter(cocktail =>
    cocktail.search.match(regex)
  )

  const onInputChange = e => {
    e.preventDefault()
    let keywords = e.target.value.split(" ")
    let regexKeywords = []
    keywords.forEach(keyword => {
      regexKeywords.push(`(?=.*${keyword})`)
    })
    setKeyword(regexKeywords.join(""))
  }

  return (
    <Layout
      title={`A list of ${cocktails.length} cocktails with ingredients | Cocktail Stack`}
      desc={`Discover the world of cocktails and discover a list of ${cocktails.length} drinks. With instructions and ingredients.}`}
      path={location.pathname}
    >
      <div className="flex flex-col sm:flex-row content-between mb-4">
        <div className="my-4 mr-4 text-gray-200 text-center sm:text-left">
          Found {filteredCocktails.length} cocktails
        </div>
        <SeachInput
          placeholder="Search for cocktail or ingredient..."
          onChange={onInputChange}
        />
      </div>
      <CocktailsTable cocktails={filteredCocktails} />
    </Layout>
  )
}
