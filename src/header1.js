// import Link from "next/link"
import { Link } from "react-router-dom"
export default function Header1() {
  return (
    <header className="relative w-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 py-4">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
      />

      <nav className="mx-auto max-w-4xl px-4">
        <div className="flex justify-center">
          <div className="rounded-lg bg-black/30 px-6 py-3 backdrop-blur-sm">
            <ul className="flex space-x-10">
              <li>
                <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-gray-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-white hover:text-gray-300 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
