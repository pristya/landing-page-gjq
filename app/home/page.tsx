import Link from "next/link";
import Navbar from "../components/navbar/page";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
<section
  className="relative flex items-center justify-center w-full min-h-screen bg-center bg-cover overflow-hidden"
  style={{ backgroundImage: `url('bg/bg.png')` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Content Center */}
  <div className="relative text-center px-6 max-w-3xl animate-fadeSlideUp">
    <h1
      className="text-5xl font-extrabold text-center mb-5 text-gna-dark"
      
    >
      Ruang Indah Dimulai dari Desain yang Tepat
    </h1>

    <p
      className="text-base md:text-lg text-gray-200 leading-relaxed mb-8"
      style={{ fontFamily: `'Inter', sans-serif` }}
    >
      Kami membantu merancang ruang yang estetis, modern, dan selaras
      dengan kenyamanan serta gaya hidup Anda.
    </p>

    <Link
      href="/contact"
      className="px-20 py-4 font-bold text-gray-300 bg-blue-500 rounded-lg shadow-xl
                 hover:bg-blue-700 hover:shadow-2xl hover:scale-[1.05] transition-all duration-300"
      style={{ fontFamily: `'Inter', sans-serif` }}
    >
      Konsultasi Gratis
    </Link>
  </div>
</section>



      {/* ================= ABOUT SECTION ================= */}
      <section className="px-6 py-20 w-full min-h-screen bg-gray-200 flex items-center justify-center font-sans ">
        <div className="grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-2 text-gray-700">
          <div>
            <div className="bg-white shadow-lg hover:scale-105 transition cursor-pointer p-4 rounded-md">
              <img src="bg/bg (10).png" className="rounded-lg" alt="Architecture" />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-700 md:text-4xl">
              About Company
            </h2>

            <p className="mb-4 leading-relaxed text-gray-700">
              <span className="font-bold text-xl text-gray-700">Griya Jichu Qof memiliki makna:</span>
<br /> Griya merupakan bahasa sansekerta yang berarti rumah. Jichu adalah pondasi yang diambil dari bahasa Mandarin, dan Qof adalah sebuah gunung yang tak kasat mata yang berfungsi sebagai pondasi bumi dalam mitologi islam.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
             Berdiri sejak tahun 2021, GJQ bergerak dalam bidang kontruksi dan perencanaan (Design & Build). Baik itu landed house, vertical housing, renovasi, dan bagunan semi permanen. Tahun 2023, GJQ akan mengembangkan area bisnis ke arah property developer.
             </p>

            <p className="leading-relaxed text-gray-700">
              Dalam proses pengerjaan sampai hasil akhir, GJQ selalu mengedepankan kepuasan pelanggan. Saat ini GJQ memiliki beberapa partner kerja tetap dengan presentase Customer Satisfaction yang tinggi (93%).
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className="px-8 py-20 w-full bg-blue-400 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Vision & Mission Company </h2>

        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* SERVICE CARD 1 */}
          <div className="border rounded-lg shadow-md hover:shadow-xl transition p-6">
            <img src="bg/bg (12).png" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Desain Arsitektur</h3>
            <p className="text-white">
              Perencanaan bangunan dari konsep awal, denah, fasad, hingga rekomendasi material.
            </p>
          </div>

          {/* SERVICE CARD 2 */}
          <div className="border rounded-lg shadow-md hover:shadow-xl transition p-6">
            <img src="bg/bg (7).png" className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Visualisasi 3D & Rendering</h3>
            <p className="text-white">
              Menyediakan gambaran nyata sebelum pembangunan dimulai dengan kualitas render profesional.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section className="px-8 py-20 bg-gray-200 text-gray-600">
        <h2 className="text-4xl font-bold text-center mb-10">Our Project</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <img src="bg/bg (3).png" className="rounded shadow-md hover:scale-105 transition" />
          <img src="bg/bg (8).png" className="rounded shadow-md hover:scale-105 transition" />
          <img src="bg/bg (11).png" className="rounded shadow-md hover:scale-105 transition" />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portofolio"
            className="px-10 py-3 bg-black text-gray-700 rounded hover:bg-gray-800 transition"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </section>

      {/* ================= WHY US SECTION ================= */}
      <section className="px-8 py-20 bg-blue-400 text-gray-700">
        <h2 className="text-4xl font-bold text-center mb-12">Kenapa Memilih Kami?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">✨ Profesional & Berpengalaman</h3>
            <p className="text-gray-300">
              Dikerjakan oleh tim arsitek ahli yang telah menangani berbagai proyek skala kecil hingga besar.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">🎨 Desain Estetik & Fungsional</h3>
            <p className="text-gray-300">
              Fasad menarik, interior nyaman, dan layout efisien sesuai gaya hidup dan kebutuhan klien.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">💰 Harga Transparan</h3>
            <p className="text-gray-300">
              Estimasi biaya jelas tanpa tambahan tersembunyi. Semua disesuaikan dengan kebutuhan proyek.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-8 py-20 bg-gray-400 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ingin Memulai Proyek Anda?</h2>
        <p className="text-lg mb-6">
          Hubungi kami untuk konsultasi awal dan dapatkan gambaran detail perencanaan bangunan Anda.
        </p>

        <Link
          href="/contact"
          className="px-12 py-3 bg-blue-400 text-gray-700 rounded hover:bg-gray-800 transition"
        >
          Hubungi Kami
        </Link>
      </section>

    </>
  );
};

export default HomePage;