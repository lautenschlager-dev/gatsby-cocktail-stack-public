import React from "react"
import { Link } from "gatsby"

const CocktailsTable = ({ cocktails }) => {
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  let randowCocktails = shuffle(cocktails)

  let ingredientsList = []

  cocktails.forEach(cocktail => {
    cocktail.ingredients.forEach(ingredient => {
      if (
        !ingredientsList.includes(ingredient) &&
        ingredient !== null &&
        ingredient !== ""
      ) {
        ingredientsList.push(ingredient)
      }
    })
  })

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className="flex">
        <div className="flex content-center items-center border-none bg-transparent p-3 sm:p-4 text-gray-200 font-bold text-left   w-24 xs:w-36 sm:w-48">
          <div>Name</div>
        </div>
        <div className="flex content-center items-center border-none bg-transparent p-3 sm:p-4 text-gray-200 font-bold text-left  w-16 sm:w-36">
          <div className="hidden sm:block">Alcoholic</div>
          <div className="block sm:hidden">Alc.</div>
        </div>
        <div className="hidden sm:flex content-center items-center  border-none bg-transparent p-3 sm:p-4 text-gray-200 font-bold text-left  w-28">
          <div>Category</div>
        </div>

        <div className="flex content-center items-center flex-1 border-none bg-transparent p-3 sm:p-4 text-gray-200 font-bold text-left ">
          <div>Ingredients</div>
        </div>
      </div>
      {randowCocktails.slice(0, 50).map((cocktails, i) => (
        <div key={i}>
          <Link
            to={`/${cocktails.strDrink
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "")}`}
          >
            <div className="flex text-center  text-gray-700 bg-gray-50 rounded-lg mb-2 shadow-sm hover:shadow transform hover:-translate-y-1 transition duration-200">
              <div className="font-bold p-3 sm:p-4 text-left  w-24 xs:w-36 sm:w-48">
                <span>{cocktails.strDrink}</span>
              </div>
              <div className="p-3 sm:p-4 text-left w-16 sm:w-36">
                <svg
                  className={`inline mr-1.5 h-5 w-5 ${
                    cocktails.strAlcoholic === "Alcoholic"
                      ? " text-green-400"
                      : " text-gray-200"
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
                </svg>{" "}
                <span className="hidden sm:inline ">
                  {cocktails.strAlcoholic}
                </span>
              </div>
              <div className="hidden sm:flex p-3 sm:p-4 text-left w-28 break-word">
                {cocktails.strCategory === "Other/Unknown"
                  ? "Unknown"
                  : cocktails.strCategory}
              </div>
              <div className="flex-1 p-3 sm:p-4 text-left text-xs sm:text-base">
                {cocktails.strIngredient1 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient1
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient1}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient2 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient2
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient2}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient3 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient3
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient3}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient4 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient4
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient4}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient5 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient5
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient5}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient6 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient6
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient6}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient7 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient7
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient7}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient8 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient8
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient8}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient9 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient9
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient9}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient10 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient10
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient10}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {cocktails.strIngredient11 ? (
                  <Link
                    to={`/ingredients/${cocktails.strIngredient11
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    <span className="bg-gray-100 p-1 mr-1 mb-1 inline-block hover:bg-gray-200">
                      {cocktails.strIngredient11}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
      <p className="mt-5 mb-5 text-center text-gray-400">
        To show more cocktails use filter on the startpage or click on a
        ingredient.
        <br />
        <button onClick={scrollToTop} className="inline-flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-gray-400 h-8 w-8 inline-block mx-auto mt-8"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <div className="inline-block mx-auto">To Top</div>
        </button>
      </p>
    </div>
  )
}

export default CocktailsTable
