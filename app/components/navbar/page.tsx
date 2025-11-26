"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const handleOpen = (name: string) => setOpenDropdown(name);
  const handleClose = () => setOpenDropdown("");

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* BRAND */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-9 w-auto opacity-95 hover:opacity-100 transition"
          />
          <span className="text-white text-xl tracking-wide pt-1 font-bold"
          style={{ fontFamily: `'Inter', sans-serif` }}>
            Griya Jichu Qof
          </span>
        </Link>

        {/* NAVIGATION */}
        <ul className="flex items-center space-x-10 text-white text-[16px] font-light pt-1">

          {/* HOME */}
          <li className="group relative cursor-pointer">
            <Link href="/" className="transition">Home</Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007bff] group-hover:w-full transition-all duration-300"></span>
          </li>

          {/* LAYANAN DROPDOWN */}
          <li
            className="group relative cursor-pointer"
            onMouseEnter={() => handleOpen("layanan")}
            onMouseLeave={handleClose}
          >
            <button className="transition">Our Projects</button>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007bff] group-hover:w-full transition-all duration-300"></span>

            {openDropdown === "layanan" && (
              <div className="absolute top-8 left-0 w-64 bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg rounded-xl py-4 px-4 animate-fadeInSoft">
                <ul className="space-y-3 text-[15px]">
                  <li>
                    <Link href="/layanan/desain" className="hover:text-[#007bff] transition">
                      Desain Arsitektur
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan/render" className="hover:text-[#007bff] transition">
                      Visualisasi 3D & Render
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan/konstruksi" className="hover:text-[#007bff] transition">
                      Konstruksi & Build
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* TENTANG KAMI DROPDOWN */}
          <li
            className="group relative cursor-pointer"
            onMouseEnter={() => handleOpen("tentang")}
            onMouseLeave={handleClose}
          >
            <button className="transition">About Us</button>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007bff] group-hover:w-full transition-all duration-300"></span>

            {openDropdown === "tentang" && (
              <div className="absolute top-8 left-0 w-52 bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg rounded-xl py-4 px-4 animate-fadeInSoft">
                <ul className="space-y-3 text-[15px]">
                  <li>
                    <Link href="/about/company" className="hover:text-[#007bff] transition">
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/teams" className="hover:text-[#007bff] transition">
                      Our Teams
                    </Link>
                  </li>
                  <li>
                    <Link href="/tentang/visi-misi" className="hover:text-[#007bff] transition">
                      Vision & Mission
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* SERTIFIKAT LEGALITAS */}
          <li className="group relative cursor-pointer">
            <Link href="/" className="transition">Legality Certificate</Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007bff] group-hover:w-full transition-all duration-300"></span>
          </li>

          {/* KONTAK */}
          <li className="group relative cursor-pointer">
            <Link href="/" className="transition">Contact</Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007bff] group-hover:w-full transition-all duration-300"></span>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
