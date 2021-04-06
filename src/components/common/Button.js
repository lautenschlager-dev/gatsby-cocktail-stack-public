import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  const buttonType = () => {
    if (props.primary) {
      return "border border-transparent text-white bg-blue-500 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
    }

    if (props.white) {
      return "border border-gray-300 text-gray-700 bg-gray-50 hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-100"
    }
  }

  return (
    <span className="inline-flex rounded-md">
      <Link
        to={props.to}
        type="button"
        className={`inline-flex items-center px-6 py-3 text-base text-center leading-6 font-medium rounded-md shadow-xl hover:shadow-none target:shadow-none focus:outline-none transition ease-in-out duration-150 ${buttonType()} ${
          props.className
        }`}
      >
        {props.text}
      </Link>
    </span>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
