const path = require(`path`)
const fetch = require(`node-fetch`)
require("dotenv").config()
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const resultCocktailsA = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
  )
  const resultDataCocktailsA = await resultCocktailsA.json()
  const resultDataCocktailsAArr = resultDataCocktailsA.drinks
  const cocktailsA = resultDataCocktailsAArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsB = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b`
  )
  const resultDataCocktailsB = await resultCocktailsB.json()
  const resultDataCocktailsBArr = resultDataCocktailsB.drinks
  const cocktailsB = resultDataCocktailsBArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsC = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c`
  )
  const resultDataCocktailsC = await resultCocktailsC.json()
  const resultDataCocktailsCArr = resultDataCocktailsC.drinks
  const cocktailsC = resultDataCocktailsCArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsD = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d`
  )
  const resultDataCocktailsD = await resultCocktailsD.json()
  const resultDataCocktailsDArr = resultDataCocktailsD.drinks
  const cocktailsD = resultDataCocktailsDArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsE = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e`
  )
  const resultDataCocktailsE = await resultCocktailsE.json()
  const resultDataCocktailsEArr = resultDataCocktailsE.drinks
  const cocktailsE = resultDataCocktailsEArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsF = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f`
  )
  const resultDataCocktailsF = await resultCocktailsF.json()
  const resultDataCocktailsFArr = resultDataCocktailsF.drinks
  const cocktailsF = resultDataCocktailsFArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsG = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g`
  )
  const resultDataCocktailsG = await resultCocktailsG.json()
  const resultDataCocktailsGArr = resultDataCocktailsG.drinks
  const cocktailsG = resultDataCocktailsGArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsH = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h`
  )
  const resultDataCocktailsH = await resultCocktailsH.json()
  const resultDataCocktailsHArr = resultDataCocktailsH.drinks
  const cocktailsH = resultDataCocktailsHArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsI = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i`
  )
  const resultDataCocktailsI = await resultCocktailsI.json()
  const resultDataCocktailsIArr = resultDataCocktailsI.drinks
  const cocktailsI = resultDataCocktailsIArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsJ = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j`
  )
  const resultDataCocktailsJ = await resultCocktailsJ.json()
  const resultDataCocktailsJArr = resultDataCocktailsJ.drinks
  const cocktailsJ = resultDataCocktailsJArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsK = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k`
  )
  const resultDataCocktailsK = await resultCocktailsK.json()
  const resultDataCocktailsKArr = resultDataCocktailsK.drinks
  const cocktailsK = resultDataCocktailsKArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsL = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l`
  )
  const resultDataCocktailsL = await resultCocktailsL.json()
  const resultDataCocktailsLArr = resultDataCocktailsL.drinks
  const cocktailsL = resultDataCocktailsLArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsM = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m`
  )
  const resultDataCocktailsM = await resultCocktailsM.json()
  const resultDataCocktailsMArr = resultDataCocktailsM.drinks
  const cocktailsM = resultDataCocktailsMArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsN = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n`
  )
  const resultDataCocktailsN = await resultCocktailsN.json()
  const resultDataCocktailsNArr = resultDataCocktailsN.drinks
  const cocktailsN = resultDataCocktailsNArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsO = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o`
  )
  const resultDataCocktailsO = await resultCocktailsO.json()
  const resultDataCocktailsOArr = resultDataCocktailsO.drinks
  const cocktailsO = resultDataCocktailsOArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsP = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p`
  )
  const resultDataCocktailsP = await resultCocktailsP.json()
  const resultDataCocktailsPArr = resultDataCocktailsP.drinks
  const cocktailsP = resultDataCocktailsPArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsQ = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q`
  )
  const resultDataCocktailsQ = await resultCocktailsQ.json()
  const resultDataCocktailsQArr = resultDataCocktailsQ.drinks
  const cocktailsQ = resultDataCocktailsQArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsR = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r`
  )
  const resultDataCocktailsR = await resultCocktailsR.json()
  const resultDataCocktailsRArr = resultDataCocktailsR.drinks
  const cocktailsR = resultDataCocktailsRArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsS = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s`
  )
  const resultDataCocktailsS = await resultCocktailsS.json()
  const resultDataCocktailsSArr = resultDataCocktailsS.drinks
  const cocktailsS = resultDataCocktailsSArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsT = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t`
  )
  const resultDataCocktailsT = await resultCocktailsT.json()
  const resultDataCocktailsTArr = resultDataCocktailsT.drinks
  const cocktailsT = resultDataCocktailsTArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsU = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u`
  )
  const resultDataCocktailsU = await resultCocktailsU.json()
  const resultDataCocktailsUArr = resultDataCocktailsU.drinks
  if (resultDataCocktailsUArr === null) {
    const cocktailsU = null
  } else {
    const cocktailsU = resultDataCocktailsUArr.map(cocktail =>
      createNode({
        ...cocktail,
        id: cocktail.idDrink,
        internal: {
          type: `Cocktails`,

          contentDigest: createContentDigest(cocktail),
        },
      })
    )
  }

  const resultCocktailsV = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v`
  )
  const resultDataCocktailsV = await resultCocktailsV.json()
  const resultDataCocktailsVArr = resultDataCocktailsV.drinks
  const cocktailsV = resultDataCocktailsVArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsW = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w`
  )
  const resultDataCocktailsW = await resultCocktailsW.json()
  const resultDataCocktailsWArr = resultDataCocktailsW.drinks
  const cocktailsW = resultDataCocktailsWArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsX = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x`
  )
  const resultDataCocktailsX = await resultCocktailsX.json()
  const resultDataCocktailsXArr = resultDataCocktailsX.drinks

  if (resultDataCocktailsUArr === null) {
    const cocktailsX = null
  } else {
    const cocktailsX = resultDataCocktailsXArr.map(cocktail =>
      createNode({
        ...cocktail,
        id: cocktail.idDrink,
        internal: {
          type: `Cocktails`,

          contentDigest: createContentDigest(cocktail),
        },
      })
    )
  }

  const resultCocktailsY = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y`
  )
  const resultDataCocktailsY = await resultCocktailsY.json()
  const resultDataCocktailsYArr = resultDataCocktailsY.drinks
  const cocktailsY = resultDataCocktailsYArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktailsZ = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z`
  )
  const resultDataCocktailsZ = await resultCocktailsZ.json()
  const resultDataCocktailsZArr = resultDataCocktailsZ.drinks
  const cocktailsZ = resultDataCocktailsZArr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails1 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=1`
  )
  const resultDataCocktails1 = await resultCocktails1.json()
  const resultDataCocktails1Arr = resultDataCocktails1.drinks
  const cocktails1 = resultDataCocktails1Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails2 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=2`
  )
  const resultDataCocktails2 = await resultCocktails2.json()
  const resultDataCocktails2Arr = resultDataCocktails2.drinks
  const cocktails2 = resultDataCocktails2Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails3 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=3`
  )
  const resultDataCocktails3 = await resultCocktails3.json()
  const resultDataCocktails3Arr = resultDataCocktails3.drinks
  const cocktails3 = resultDataCocktails3Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails4 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=4`
  )
  const resultDataCocktails4 = await resultCocktails4.json()
  const resultDataCocktails4Arr = resultDataCocktails4.drinks
  const cocktails4 = resultDataCocktails4Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails5 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=5`
  )
  const resultDataCocktails5 = await resultCocktails5.json()
  const resultDataCocktails5Arr = resultDataCocktails5.drinks
  const cocktails5 = resultDataCocktails5Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails6 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=6`
  )
  const resultDataCocktails6 = await resultCocktails6.json()
  const resultDataCocktails6Arr = resultDataCocktails6.drinks
  const cocktails6 = resultDataCocktails6Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails7 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=7`
  )
  const resultDataCocktails7 = await resultCocktails7.json()
  const resultDataCocktails7Arr = resultDataCocktails7.drinks
  const cocktails7 = resultDataCocktails7Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails8 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=8`
  )
  const resultDataCocktails8 = await resultCocktails8.json()
  const resultDataCocktails8Arr = resultDataCocktails8.drinks
  if (resultDataCocktails8Arr === null) {
    return null
  } else {
    const cocktails8 = resultDataCocktails8Arr.map(cocktail =>
      createNode({
        ...cocktail,
        id: cocktail.idDrink,
        internal: {
          type: `Cocktails`,

          contentDigest: createContentDigest(cocktail),
        },
      })
    )
  }

  const resultCocktails9 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=9`
  )
  const resultDataCocktails9 = await resultCocktails9.json()
  const resultDataCocktails9Arr = resultDataCocktails9.drinks
  const cocktails9 = resultDataCocktails9Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  const resultCocktails0 = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=0`
  )
  const resultDataCocktails0 = await resultCocktails0.json()
  const resultDataCocktails0Arr = resultDataCocktails0.drinks
  const cocktails0 = resultDataCocktails0Arr.map(cocktail =>
    createNode({
      ...cocktail,
      id: cocktail.idDrink,
      internal: {
        type: `Cocktails`,

        contentDigest: createContentDigest(cocktail),
      },
    })
  )

  return Promise.all(
    [countries],
    [cocktailsA],
    [cocktailsB],
    [cocktailsC],
    [cocktailsD],
    [cocktailsE],
    [cocktailsF],
    [cocktailsF],
    [cocktailsH],
    [cocktailsI],
    [cocktailsJ],
    [cocktailsK],
    [cocktailsL],
    [cocktailsM],
    [cocktailsN],
    [cocktailsO],
    [cocktailsP],
    [cocktailsQ],
    [cocktailsR],
    [cocktailsS],
    [cocktailsT],
    [cocktailsU],
    [cocktailsV],
    [cocktailsW],
    [cocktailsX],
    [cocktailsY],
    [cocktailsZ],
    [cocktails1],
    [cocktails2],
    [cocktails3],
    [cocktails4],
    [cocktails5],
    [cocktails6],
    [cocktails7],
    [cocktails8],
    [cocktails9],
    [cocktails0]
  )
}

exports.onCreateNode = async ({
  actions: { createNode },
  getCache,
  createNodeId,
  node,
}) => {
  // because onCreateNode is called for all nodes, verify that you are only running this code on nodes created by your plugin
  if (node.internal.type === `Cocktails`) {
    // create a FileNode in Gatsby that gatsby-transformer-sharp will create optimized images for
    if(node.strDrinkThumb){
      const fileNode = await createRemoteFileNode({
        // the url of the remote image to generate a node for
        url: node.strDrinkThumb || "",
        getCache,
        createNode,
        createNodeId,
        parentNodeId: node.id,
        ext: ".jpg",
      })
      if (fileNode) {
        // OR with inference: link your source plugin's node to the File node without schemaCustomization like this, but creates a less sturdy schema
        node.remoteImage___NODE = fileNode.id
      }
    }
  }
}

// Country
exports.createPages = async ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    const cocktailsTemplate = path.resolve("./src/templates/Cocktails.js")
    const ingredientsTemplate = path.resolve("./src/templates/Ingredients.js")

    const { createPage } = actions

    resolve(
      graphql(`
        query {
          allCocktails {
            nodes {
              id
              strDrink
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
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const cocktailsEntires = result.data.allCocktails.nodes

        cocktailsEntires.forEach(cocktail => {
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

        cocktailsEntires.forEach(entry => {
          const slug = entry.strDrink
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "")
          const page = {
            path: `/${slug}`,
            component: cocktailsTemplate,
            context: {
              id: entry.id,
            },
          }
          createPage(page)
        })

        cocktailsEntires.forEach(entry => {
          entry.ingredients.forEach(entry => {
            if (entry !== null && entry !== "") {
              const slug = entry
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")
              const page = {
                path: `/ingredients/${slug}`,
                component: ingredientsTemplate,
                context: {
                  id: entry,
                },
              }
              createPage(page)
            }
          })
        })
      })
    )
  })
}
