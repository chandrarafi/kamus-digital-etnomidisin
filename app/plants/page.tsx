"use client";

import Link from "next/link";
import plantsData from "../plants.json";
import { useState } from "react";

export default function Plants() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tanaman berdasarkan pencarian
  const filteredPlants = plantsData.tanaman_herbal.filter((plant) => {
    const matchesSearch =
      plant.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (plant.nama_latin &&
        plant.nama_latin.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesSearch;
  });

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
          <nav className="flex gap-3 md:gap-4">
            <Link
              href="/"
              className="text-sm md:text-base text-gray-600 hover:text-blue-500 transition-colors flex items-center font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Beranda
            </Link>
            <Link
              href="/plants"
              className="text-sm md:text-base text-blue-500 font-medium flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              Tanaman
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tanaman Herbal Etnomidisin
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan berbagai tanaman herbal yang digunakan dalam pengobatan
              tradisional dengan manfaat kesehatan yang beragam.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari tanaman..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan {filteredPlants.length} tanaman
            </p>
          </div>

          {/* Plants Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <Link
                href={`/plants/${plant.id}`}
                key={plant.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mr-4">
                      {plant.nama.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">
                        {plant.nama}
                      </h2>
                      <p className="text-sm text-gray-500 italic">
                        {plant.nama_latin || "Nama latin tidak tersedia"}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600 line-clamp-2">
                      {plant.deskripsi.substring(0, 100)}...
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {plant.manfaat.slice(0, 2).map((manfaat, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100"
                      >
                        {manfaat.split(" ")[0]}
                      </span>
                    ))}
                    {plant.manfaat.length > 2 && (
                      <span className="inline-block bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-100">
                        +{plant.manfaat.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPlants.length === 0 && (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Tidak ada hasil
              </h3>
              <p className="text-gray-500">
                Tidak ada tanaman yang cocok dengan kriteria pencarian Anda.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p>&copy; 2025 Kamus Digital Etnomidisin. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
