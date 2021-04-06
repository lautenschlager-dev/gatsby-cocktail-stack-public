import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "./../components/layouts/Default"
import { Helmet } from "react-helmet"

const Country = ({ pageContext: { post }, data, location }) => {
  const cocktail = data.allCocktails.nodes[0]

  let ingredients = [
    {
      ingredient: cocktail.strIngredient1,
      measure: cocktail.strMeasure1,
    },
    {
      ingredient: cocktail.strIngredient2,
      measure: cocktail.strMeasure2,
    },
    {
      ingredient: cocktail.strIngredient3,
      measure: cocktail.strMeasure3,
    },
    {
      ingredient: cocktail.strIngredient4,
      measure: cocktail.strMeasure4,
    },
    {
      ingredient: cocktail.strIngredient5,
      measure: cocktail.strMeasure5,
    },
    {
      ingredient: cocktail.strIngredient6,
      measure: cocktail.strMeasure6,
    },
    {
      ingredient: cocktail.strIngredient7,
      measure: cocktail.strMeasure7,
    },
    {
      ingredient: cocktail.strIngredient8,
      measure: cocktail.strMeasure8,
    },
    {
      ingredient: cocktail.strIngredient9,
      measure: cocktail.strMeasure9,
    },
    {
      ingredient: cocktail.strIngredient10,
      measure: cocktail.strMeasure10,
    },
    {
      ingredient: cocktail.strIngredient11,
      measure: cocktail.strMeasure11,
    },
  ]

  var filteredIngredients = ingredients.filter(function (el) {
    return el.ingredient != null
  })

  let ingredientsMeta = []

  ingredients.forEach(element => {
    if (element.ingredient !== null && element.ingredient !== "") {
      ingredientsMeta.push(element.ingredient)
    }
  })

  const goBack = () => {
    window.history.back()
  }

  return (
    <Layout
      title={`${cocktail.strDrink} ingredients and instructions | Cocktail Stack`}
      desc={`A simple description of how to prepare a ${cocktail.strDrink} with all the ingredients. }`}
      path={location.pathname}
    >
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Recipe",
            "datePublished": "${cocktail.dateModified}",
            "name": "${cocktail.strDrink}",
            ${cocktail.remoteImage &&
            `"image": [
                "${cocktail.remoteImage.childImageSharp.one.src}",
                "${cocktail.remoteImage.childImageSharp.four.src}",
                "${cocktail.remoteImage.childImageSharp.sixteen.src}"
               ],`
            }            
            "description": "${cocktail.strInstructions}",
            "recipeIngredient": ${JSON.stringify(ingredientsMeta)},
            "recipeInstructions": "${cocktail.strInstructions}",
            "recipeCategory": "beverage"
          }  
        `}
        </script>
      </Helmet>
      <div className="">
        <nav className="flex mb-5" aria-label="Breadcrumb">
          <ol className="flex px-6 mx-auto space-x-4 rounded-md shadow bg-gray-50">
            <li className="flex">
              <div className="flex items-center">
                <Link to="/" className="text-gray-400 hover:text-gray-500">
                  {/* Heroicon name: home */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-150 ease-in-out"
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
                <span className="text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
                  {cocktail.strDrink}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="max-w-lg p-3 mx-auto rounded shadow bg-gray-50">
          <div>
            {cocktail.remoteImage && <Img
              fluid={cocktail.remoteImage.childImageSharp.fluid}
              className={`block mx-auto`}
              alt={`${cocktail.strDrink} Cocktail`}
            />
            }
          </div>
          <div className="mb-4 text-center">
            <h1 className="mt-1 mb-0 text-2xl font-extrabold leading-relaxed text-gray-900 sm:text-3xl lg:text-4xl">
              {cocktail.strDrink}
            </h1>
            <h2 className="text-base leading-relaxed text-gray-400">
              {cocktail.strCategory}
            </h2>
          </div>

          <ul>
            <li>
              <div className="flex items-center py-4 hover:bg-gray-50 focus:outline-none">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm font-medium leading-5 truncate text-brand">
                        Alcoholic
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <div className="flex items-center text-sm leading-5 text-gray-900">
                          {/* Heroicon name: check-circle */}
                          <svg
                            className={`flex-shrink-0 mr-1.5 h-5 w-5 ${cocktail.strAlcoholic === "Alcoholic"
                                ? " text-green-400"
                                : " text-gray-400"
                              }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="border-t border-gray-200">
              <div className="flex items-center py-4 hover:bg-gray-100 focus:outline-none">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm font-medium leading-5 truncate text-brand">
                        Glass
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <div className="flex items-center text-sm leading-5 text-gray-900">
                          {cocktail.strGlass}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="border-t border-gray-200">
              <div className="flex items-center py-4 hover:bg-gray-100 focus:outline-none">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm font-medium leading-5 truncate text-brand">
                        Ingredients
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          <div className="grid grid-cols-2 gap-1 mb-3">
                            <div>
                              <span className="font-semibold">Measure</span>
                            </div>
                            <div>
                              <span className="font-semibold">Ingredient</span>
                            </div>
                          </div>
                          <div>
                            {filteredIngredients.map((ingredient, i) => (
                              <div
                                key={i}
                                className="grid grid-cols-2 gap-1 mb-1"
                              >
                                <div>
                                  <span>{ingredient.measure}</span>
                                </div>
                                <div>
                                  <Link
                                    to={`/ingredients/${ingredient.ingredient
                                      .toLowerCase()
                                      .replace(/ /g, "-")
                                      .replace(/[^\w-]+/g, "")}`}
                                    className="inline-block p-1 bg-gray-100 hover:bg-gray-200"
                                  >
                                    {ingredient.ingredient}
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="border-t border-gray-200">
              <div className="flex items-center py-4 hover:bg-gray-50 focus:outline-none">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm font-medium leading-5 truncate text-brand">
                        Instructions
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <div className="flex items-center text-sm leading-5 text-gray-900">
                          {cocktail.strInstructions}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="border-t border-gray-200">
              <div className="flex items-center py-4 hover:bg-gray-50 focus:outline-none">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm font-medium leading-5 truncate text-brand">
                        Like the recipe?
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <div className="flex items-center text-sm leading-5 text-gray-900">
                          <div className="text-center"><a href="https://www.buymeacoffee.com/lautenschlager" className="inline-block" target="_blank noopener noreferrer"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a cocktail&emoji=🍸&slug=lautenschlager&button_colour=b09e80&font_colour=ffffff&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00" alt="Buy me a cocktail donations" /></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-5 mb-5 text-center text-gray-400">
          <button onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>{" "}
            go back
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Country

export const query = graphql`
  query($id: String) {
    allCocktails(filter: { id: { eq: $id } }) {
      nodes {
        id
        strDrink
        strCategory
        strAlcoholic
        strCreativeCommonsConfirmed
        strDrinkThumb
        strGlass
        strIBA
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
        strInstructions
        strInstructionsDE
        strMeasure1
        strMeasure10
        strMeasure11
        strMeasure12
        strMeasure2
        strMeasure3
        strMeasure4
        strMeasure5
        strMeasure6
        strMeasure7
        strMeasure8
        strMeasure9
        strTags
        strVideo
        dateModified
        remoteImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              src
            }
            one: fixed(height: 393, width: 700, cropFocus: CENTER) {
              width
              height
              src
            }
            sixteen: fixed(height: 393, width: 700, cropFocus: CENTER) {
              width
              height
              src
            }
            four: fixed(height: 525, width: 700, cropFocus: CENTER) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`
