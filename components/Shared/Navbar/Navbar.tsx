"use client";

import { ModeToggle } from "../ModeToggle";
import { NavLinks } from "../SidebarRoutes/Sidebar.data";
import { NavbarDashboar } from "@/components/Shared/NavbarDashboar";

export const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleMenu = () => {
  //   setShoeMenu(!showMenu);
  // };

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-white dark:bg-black p-4 sm:mx-0">
        <div className="container py-2 md:py-0">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-3xl font-bold font-serif">
                Car-Rental
              </span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavLinks.map(({ id, name, link }) => (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                    >
                      {name}
                    </a>
                  </li>
                ))}

                <ModeToggle />
              </ul>
            </nav>
            {/* Mobile view  */}
            <div className="flex items-center gap-4 md:hidden ">
              <ModeToggle />
              <NavbarDashboar />
            </div>
          </div>
        </div>
      </div>

      {/* TODO: COMPONENTE CREADO APARTE  */}
      {/* <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          Logo
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          Links de navegación Desktop
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Productos
              </Link>
              <Link
                href="/servicios"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </Link>
            </div>
          </div>

          Botón de menú móvil
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        Menú móvil
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Productos
              </Link>
              <Link
                href="/servicios"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav> */}
    </>
  );
};
