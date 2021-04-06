/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = props => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
              summary
            }
          }
        }
        img1: file(
          relativePath: { eq: "structured-data/local_business_1x1.jpg" }
        ) {
          id
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
        img2: file(
          relativePath: { eq: "structured-data/local_business_4x3.jpg" }
        ) {
          id
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
        img3: file(
          relativePath: { eq: "structured-data/local_business_16x9.jpg" }
        ) {
          id
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    `
  )

  let defaultProps = {
    title: `Website für 100 € im Monat | Lautenschlager`,
    description: `Sichere Dir Deine komplett individuelle Website zu einem Fixpreis von nur 100 € im Monat.`,
    logo: `https://signatur.lautenschlager.de/logo.png`,
    lang: `de`,
    url: "https://onboarding.lautenschlager.de",
    path: "/",
    adress: {
      name: `Lautenschlager Marketing & Entwicklung`,
      street: `Einbecker Str. 3`,
      city: `Kassel`,
      country: `Germany`,
      countyCode: `DE`,
      plz: `34123`,
      phone: `+4915201063992`,
    },
  }

  if (props.thema) {
    defaultProps.title = `${props.thema} Website für 100 € im Monat | Lautenschlager`
  }
  if (props.thema) {
    defaultProps.description = `Sichere Dir Deine komplett individuelle ${props.thema} Website für nur 100,- € im Monat. Mit Geld zurück Garantie.`
  }
  if (props.link) {
    defaultProps.path = `${props.link}`
  }

  return (
    <Helmet>
      <html lang={defaultProps.lang} />
      <title>{`${defaultProps.title}`}</title>
      <meta name="description" content={`${defaultProps.description}`} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={`${defaultProps.title}`} />
      <meta property="og:description" content={`${defaultProps.description}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${defaultProps.title}`} />
      <meta
        name="twitter:description"
        content={`${defaultProps.description}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="https://onboarding.lautenschlager.de/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://onboarding.lautenschlager.de/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://onboarding.lautenschlager.de/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://onboarding.lautenschlager.de/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://onboarding.lautenschlager.de/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://onboarding.lautenschlager.de/favicon-128.png"
        sizes="128x128"
      />
      <meta
        name="application-name"
        content="Website für 100 € im Monat | Lautenschlager Marketing & Entwicklung"
      />
      <meta name="msapplication-TileColor" content="#FE8903" />
      <meta
        name="msapplication-TileImage"
        content="https://onboarding.lautenschlager.de/mstile-144x144.png"
      />
      <meta
        name="msapplication-square70x70logo"
        content="https://onboarding.lautenschlager.de/mstile-70x70.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="https://onboarding.lautenschlager.de/mstile-150x150.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="https://onboarding.lautenschlager.de/mstile-310x150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="https://onboarding.lautenschlager.de/mstile-310x310.png"
      />
      <meta name="theme-color" content="#FE8903" />
      <link rel="canonical" href={`${defaultProps.link}`} />
      <meta
        name="author"
        content={`${data.site.siteMetadata.author.name} - ${data.site.siteMetadata.author.summary}`}
      />
    </Helmet>
  )
}

export default SEO
