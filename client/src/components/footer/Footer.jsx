import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-900 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mobile Shop</h3>
            <p className="text-gray-400">Your go-to destination for the latest mobile devices.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition-all ease-in-out duration-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-all ease-in-out duration-300">Products</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-all ease-in-out duration-300">About</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-all ease-in-out duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition-all ease-in-out duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-all ease-in-out duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-all ease-in-out duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-all ease-in-out duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; 2023 📱 MobileHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
