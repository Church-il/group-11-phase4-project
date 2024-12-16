import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const adjustPadding = () => {
      const navbar = document.querySelector('nav');
      const mainContainer = document.querySelector('main'); // Adjust your selector if needed
      if (navbar && mainContainer) {
        const navbarHeight = navbar.offsetHeight;
        mainContainer.style.paddingTop = `${navbarHeight}px`;
      }
    };

    // Initial adjustment
    adjustPadding();

    // Re-adjust on window resize
    window.addEventListener('resize', adjustPadding);

    return () => {
      window.removeEventListener('resize', adjustPadding);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl tracking-wide animate-bounce">MyApp</div>
        <ul className="flex space-x-6">
          <li className="group">
            <Link
              to="/"
              className="text-white text-lg font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/projects"
              className="text-white text-lg font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
            >
              Projects
            </Link>
          </li>
          <li className="group">
            <Link
              to="/resources"
              className="text-white text-lg font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
            >
              Resources
            </Link>
          </li>
          {user ? (
            <>
              <li className="group">
                <Link
                  to="/profile"
                  className="text-white text-lg font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="group">
                <Link
                  to="/login"
                  className="text-white text-lg font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
                >
                  Login
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/register"
                  className="text-white text-lg font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
