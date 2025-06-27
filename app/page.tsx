"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const teamMembers = [
    {
      name: "Asraf",
      nim: "2210742037",
      avatar: "A",
    },
    {
      name: "Lany Adila Putri",
      nim: "2210742002",
      avatar: "L",
    },
    {
      name: "M. Dzaki Annafi N",
      nim: "2210742025",
      avatar: "M",
    },
    {
      name: "Nia Sepya Putri",
      nim: "2210743008",
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
            className="text-lg md:text-2xl font-bold flex items-center text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 mr-1 md:mr-2 text-blue-500"
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

      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Hero Section */}
        <section className="py-8 md:py-12 mb-8 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-blue-500">
                  KAMUS DIGITAL ETNOMIDISIN
                </h1>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                  Jelajahi kekayaan tanaman herbal Indonesia dan manfaat
                  kesehatan tradisionalnya melalui kamus digital interaktif ini.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 md:py-12 mb-8 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="container mx-auto px-4 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
              Nama Kelompok 1
            </h2>

            {/* Single Card for Team */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold mr-4">
                      {member.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{member.name}</h4>
                      <p className="text-sm text-gray-500">{member.nim}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Mulai Jelajahi Tanaman Herbal
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Temukan manfaat kesehatan dari berbagai tanaman herbal Indonesia
              untuk meningkatkan kualitas hidup Anda.
            </p>
            <Link
              href="/plants"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Lihat Daftar Tanaman
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-8">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p>&copy; 2025 Kamus Digital Etnomidisin. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
