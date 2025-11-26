import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md fixed w-full top-0 left-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <Link href="/">
        <ul className="flex space-x-2 text-gray-800 text-2xl font-medium">
          <li>
          <img
            src="/logo.svg"   // GANTI DENGAN GAMBAR LOGO KAMU
            alt="Logo"
            className="h-10 w-auto cursor-pointer "
            />
            </li>
            <li className="pt-2">Griya Jichu Qof</li>
        </ul>
        </Link>

        {/* NAV LINKS */}
        <ul className="flex space-x-6 text-gray-800 text-lg font-medium pt-1">
          <li>
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/layanan" className="hover:text-orange-400 transition">
              Layanan
            </Link>
          </li>

          <li>
            <Link href="/portofolio" className="hover:text-orange-400 transition">
              Portofolio
            </Link>
          </li>

          <li>
            <Link href="/tentang" className="hover:text-orange-400 transition">
              Tentang Kami
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-orange-400 transition">
              Kontak
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
