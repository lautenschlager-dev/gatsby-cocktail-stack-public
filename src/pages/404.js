import React from "react"
import Layout from "./../components/layouts/Default"
export default function Page({ location }) {
  return (
    <Layout
      title="404 | Cocktail Stack"
      description=""
      path={location.pathname}
    >
      <div className="my-16 xl:my-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-max-content lg:max-w-7xl mx-auto">
          <div className="relative">
            <div className="relative md:p-6">
              <section className="mb-8">
                <div className="text-gray-700 mb-6 lg:max-w-3xl lg:mb-0 mx-auto">
                  <div className="mb-8">
                    <div className="relative z-10 mb-16 md:mb-2">
                      <div className="text-lg mx-auto mb-6">
                        <p className="text-base leading-6 text-brand font-semibold tracking-wide uppercase">
                          404
                        </p>
                        <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl sm:leading-10">
                          Page not found
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
