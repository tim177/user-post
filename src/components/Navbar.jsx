import Link from "next/link";
import { RiHome2Fill, RiInformationFill, RiArticleFill } from "react-icons/ri";

const Navbar = ({ children }) => (
  <>
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">YourLogo</h1>
        <ul className="flex space-x-4 text-white">
          <li className="flex items-center space-x-2">
            <RiHome2Fill className="h-6 w-6" />
            <Link href="/">
              <p className="text-white">Home</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <RiInformationFill className="h-6 w-6" />
            <Link href="/about">
              <p className="text-white">About</p>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <RiArticleFill className="h-6 w-6" />
            <Link href="/blog">
              <p className="text-white">Blog</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    {children}
  </>
);

export default Navbar;
