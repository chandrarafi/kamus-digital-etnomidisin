import Link from "next/link";
import plantsData from "../plants.json";

export default function Plants() {
  const { tanaman_herbal } = plantsData;

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
              href="/"
              className="text-gray-600 hover:text-blue-500 transition-colors flex items-center font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Beranda
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
            Tanaman Herbal Indonesia
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi koleksi lengkap tanaman herbal yang digunakan dalam
            pengobatan tradisional Indonesia. Temukan manfaat dan khasiatnya
            untuk kesehatan.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Cari tanaman herbal..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md font-medium">
              Cari
            </button>
          </div>
        </div>

        {/* Plants List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tanaman_herbal.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-xl mr-4">
                    {plant.nama && plant.nama.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {plant.nama}
                    </h3>
                    <p className="text-gray-500 text-sm italic">
                      {plant.nama_latin}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {plant.deskripsi}
                </p>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <p className="font-medium text-gray-700 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Manfaat Utama:
                  </p>
                  <ul className="space-y-2 ml-2">
                    {plant.manfaat &&
                      plant.manfaat.slice(0, 3).map((manfaat, index) => (
                        <li
                          key={index}
                          className="text-gray-600 flex items-start"
                        >
                          <svg
                            className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="line-clamp-1">{manfaat}</span>
                        </li>
                      ))}
                    {plant.manfaat && plant.manfaat.length > 3 && (
                      <li className="text-blue-500 font-medium text-sm mt-1 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {plant.manfaat.length - 3} manfaat lainnya
                      </li>
                    )}
                  </ul>
                </div>

                <Link
                  href={`/plants/${plant.id}`}
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <nav className="inline-flex rounded-lg shadow-sm bg-white border border-gray-100">
            <button className="px-4 py-2 text-gray-500 hover:text-blue-500 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="px-4 py-2 text-blue-500 font-medium">1</button>
            <button className="px-4 py-2 text-gray-500 hover:text-blue-500">
              2
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-blue-500">
              3
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-blue-500 border-l border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
          <p>&copy; 2023 Kamus Digital Etnomidisin. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
