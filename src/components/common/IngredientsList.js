import React from "react"
import { Link } from "gatsby"

const IngredientList = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient, i) => (
        <Link
          to={`/ingredients/${ingredient
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "")}`}
          key={i}
        >
          <span className="bg-gray-100 rounded p-2 mr-2 mb-2 inline-block hover:bg-gray-200">
            {ingredient}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default IngredientList
