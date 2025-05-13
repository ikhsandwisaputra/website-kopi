import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import  supabase  from "../lib/supabaseClient"; // pastikan path sesuai
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };

    checkSession();

    // Listen ke perubahan login/logout secara real-time
    const { data: listener } = supabase.auth.onAuthStateChange((session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/login");
  };
  

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-brown-800">KopiKu</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-brown-700 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-600 transition duration-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang" className="hover:text-yellow-600 transition duration-300">
              Tentang
            </Link>
          </li>
        {isLoggedIn && (
  <li>
    <Link to="/tambah-kopi" className="hover:text-yellow-600 transition duration-300">
      Tambah Kopi
    </Link>
  </li>
)}

          <li>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:text-yellow-600 transition duration-300"
            >
              Login
            </Link>
          )}
        </li>
        
        </ul>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brown-800 text-3xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-md px-6`}
      >
        <ul className="flex flex-col gap-4 py-4 text-brown-700 font-medium">
          <li>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              Testimoni
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;