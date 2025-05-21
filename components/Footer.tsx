import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import BrandName from "./BrandName"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
                <BrandName size="2xl" />
            </h3>
            <p className="mb-4">Lighter than a bird, tougher than an industrial drone</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#specs">Specifications</Link>
              </li>
              <li>
                <Link href="#advantages">Advantages</Link>
              </li>
              <li>
                <Link href="#team">Our Team</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Drone Street</p>
            <p>Tech City, TC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@FeatherTech.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} FeatherTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

