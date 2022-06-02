export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4">
          {/*------ NAVBAR STARTS ------*/}
          <section>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative" aria-label="Global">
                <div className="flex justify-between">
                  <div>
                    <a
                      href="#"
                      className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                    >
                      Marketplace
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                    >
                      Company
                    </a>
                    <a
                      href="#"
                      className="mr-8 font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </section>
          {/*------ NAVBAR ENDS ------*/}
          <div className="fit">
            {/*------ HERO STARTS ------*/}
            <section className="lg:2/6 my-28 text-left">
              <div className="text-6xl font-semibold leading-none text-gray-900">
                Grow your career as a developer
              </div>
              <div className="text-true-gray-500 mt-6 text-xl font-light antialiased">
                Learn programming and web development the easy way! Get
                unlimited access to all of our courses.
              </div>
              <div className="mt-5 flex sm:mt-8 lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </section>
            {/*------ HERO ENDS ------*/}

            {/*------ BREADCRUMBS STARTS ------*/}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="flex divide-x divide-indigo-400 leading-none text-indigo-600">
                <li className="pr-4">
                  <a href="#">Buy</a>
                </li>
                <li className="px-4">
                  <a href="#">My Orders</a>
                </li>
                <li className="px-4">
                  <a href="#">All Orders</a>
                </li>
              </ol>
            </nav>
            {/*------ BREADCRUMBS ENDS ------*/}

            {/*------ ADDRESS STARTS ------*/}
            <section className="bg-indigo-600 text-white">
              <div className="p-8">
                <h1 className="text-2xl">
                  Hello, 0xd9D5cD41Fe921A743F2b5Fe71CC3070F5C176208
                </h1>
                <h2 className="subtitle mb-5 text-xl">
                  I hope you are having a great day!
                </h2>
                <div className="flex items-center justify-between">
                  <div className="sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-black hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
                      >
                        Learn how to purchase
                      </a>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>Currently on </span>
                      <strong className="text-2xl">
                        Ethereum Main Network
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*------ ADDRESS ENDS ------*/}

            {/*------ CURRENCY STARTS ------*/}
            <div className="mb-5 grid grid-cols-4">
              <div className="flex flex-1 items-stretch text-center">
                <div className="rounded-md border p-10 drop-shadow">
                  <div>
                    <span className="text-2xl font-bold">ETH = 3145.1$</span>
                  </div>
                  <p className="text-xl text-gray-500">Current eth Price</p>
                </div>
              </div>
              <div className="flex flex-1 items-stretch text-center">
                <div className="rounded-md border p-10 drop-shadow">
                  <div>
                    <span className="text-2xl font-bold">0.004769 = 15$</span>
                  </div>
                  <p className="text-xl text-gray-500">Price per course</p>
                </div>
              </div>
            </div>
            {/*------ CURRENCY ENDS ------*/}

            {/*------ ORDER INFO STARTS ------*/}
            <div className="mb-3 overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="py-5 px-4 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Next JS & Typescript with Shopify Integration - Full Guide
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  0.0065 ETH
                </p>
              </div>

              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 py-5 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Order ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
                    </dd>
                  </div>
                  <div className="bg-white py-5 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Proof</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
                    </dd>
                  </div>
                  <div className="bg-white py-5 px-4 sm:px-6">
                    <div className="mb-3 rounded-xl bg-green-100">
                      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-3 lg:px-3">
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex w-0 flex-1 items-center">
                            <p className="ml-3 truncate font-medium text-green-900">
                              <span className="hidden md:inline">
                                Purchased!
                              </span>
                            </p>
                          </div>
                          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                              type="button"
                              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                              <span className="sr-only">Dismiss</span>
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow-md">
                        <a
                          href="#"
                          className="md:text-md flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-black hover:bg-gray-100 md:py-4 md:px-10"
                        >
                          Watch the course
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="relative mt-1 w-72 rounded-md">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block rounded-md border-gray-300 p-4 pl-7 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="x@y.com"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <div className="flex lg:justify-start">
                            <div className="rounded-md shadow">
                              <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-sm text-white hover:bg-indigo-700 md:py-4 md:px-10"
                              >
                                Search
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative inline-block w-full text-gray-700">
                      <select
                        className="focus:shadow-outline h-10 w-72 appearance-none rounded-lg border pr-6 pl-3 text-base placeholder-gray-600"
                        placeholder="Regular input"
                      >
                        <option>A regular sized select input</option>
                        <option>Another option</option>
                        <option>And one more</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            {/*------ ORDER INFO ENDS ------*/}

            {/*------ COURSE CARD STARTS ------*/}
            <section className="mb-5 grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:w-48"
                        src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                        alt="Man looking at item at a store"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                        Case study
                      </div>
                      <a
                        href="#"
                        className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
                      >
                        Finding customers for your new business
                      </a>
                      <p className="mt-2 text-gray-500">
                        Getting a new business off the ground is a lot of hard
                        work. Here are five ideas you can use to find your first
                        customers.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            {/*------ COURSE CARD ENDS ------*/}
          </div>
        </div>
        {/*------ FOOTER STARTS ------*/}
        <footer className="bg-gray-900 pt-1">
          <div className="container mx-auto px-6">
            <div className="mt-5 flex flex-col items-center">
              <div className="py-6">
                <p className="text-primary-2 mb-6 text-sm font-bold text-white">
                  © {new Date().getFullYear()} Eincode
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/*------ FOOTER ENDS ------*/}
      </div>
    </div>
  )
}
