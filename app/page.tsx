import Link from "next/link";

export default function Home() {
  const teamMembers = [
    {
      name: "Asraf",
      nim: "2210742037",
      role: "Ketua Kelompok",
      avatar: "A",
    },
    {
      name: "Lany Adila Putri",
      nim: "2210742002",
      role: "Anggota",
      avatar: "L",
    },
    {
      name: "M. Dzaki Annafi N",
      nim: "2210742025",
      role: "Anggota",
      avatar: "M",
    },
    {
      name: "Nia Sepya Putri",
      nim: "2210743008",
      role: "Anggota",
      avatar: "N",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold flex items-center text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span>KAMUS ETNOMIDISIN</span>
          </Link>
          <nav>
            <Link
              href="/plants"
              className="text-gray-600 hover:text-blue-500 transition-colors flex items-center font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              Tanaman Herbal
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-500">
                KAMUS DIGITAL ETNOMIDISIN
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Jelajahi kekayaan tanaman herbal Indonesia dan manfaat kesehatan
                tradisionalnya melalui kamus digital interaktif ini.
              </p>
              <Link
                href="/plants"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Jelajahi Tanaman
              </Link>
            </div>

            <div className="flex-1 mt-8 md:mt-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8">
                <div className="relative">
                  <div className="relative z-10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-32 w-32 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Kamus Digital Interaktif
                    </h3>
                    <p className="text-gray-600">
                      Akses informasi lengkap tentang tanaman herbal Indonesia
                      dengan mudah dan cepat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Fitur Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-5 border border-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Koleksi Lengkap
              </h3>
              <p className="text-gray-600">
                Berbagai jenis tanaman herbal Indonesia dengan informasi lengkap
                tentang manfaat dan khasiatnya.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-5 border border-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Pencarian Mudah
              </h3>
              <p className="text-gray-600">
                Temukan tanaman herbal dengan cepat melalui fitur pencarian yang
                mudah digunakan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-5 border border-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Informasi Lengkap
              </h3>
              <p className="text-gray-600">
                Detail komprehensif tentang setiap tanaman, termasuk nama latin,
                deskripsi, dan manfaat kesehatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Tim Pengembang
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Kamus Digital Etnomidisin dikembangkan oleh Kelompok 1
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center transition-all hover:shadow-md"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-2">{member.nim}</p>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Mulai Jelajahi Sekarang
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan khasiat tanaman herbal Indonesia dan manfaatnya untuk
            kesehatan Anda.
          </p>
          <Link
            href="/plants"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-sm hover:shadow-md"
          >
            Lihat Daftar Tanaman
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p>&copy; 2023 Kamus Digital Etnomidisin. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
