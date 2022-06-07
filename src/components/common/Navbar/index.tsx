import Link from 'next/link'

export default function Navbar() {
  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="#">
                <a
                  href="#"
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
              </Link>
              <Link href="#">
                <a
                  href="#"
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                >
                  Marketplace
                </a>
              </Link>
              <Link href="#">
                <a
                  href="#"
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                >
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a
                  href="#"
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900"
                >
                  Whishlist
                </a>
              </Link>
              <Link href="#">
                <a
                  href="#"
                  className="rounded-md border bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Connect
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
