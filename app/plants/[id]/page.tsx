import Link from "next/link";
import plantsData from "../../plants.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return plantsData.tanaman_herbal.map((plant) => ({
    id: plant.id.toString(),
  }));
}

export default function PlantDetail({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const plant = plantsData.tanaman_herbal.find(
    (p) => p.id === parseInt(params.id)
  );

  if (!plant) {
    notFound();
  }

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
              className="text-sm md:text-base text-gray-600 hover:text-blue-500 transition-colors flex items-center font-medium"
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center text-sm text-gray-500 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
            <Link href="/" className="hover:text-blue-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Beranda
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/plants"
              className="hover:text-blue-500 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Tanaman
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-blue-500 truncate max-w-[150px] md:max-w-xs">
              {plant.nama}
            </span>
          </div>

          {/* Plant Header Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl md:text-4xl font-bold">
                  {plant.nama && plant.nama.charAt(0)}
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">
                    {plant.nama}
                  </h1>
                  <p className="text-lg text-gray-500 italic mb-4">
                    {plant.nama_latin || "Nama latin tidak tersedia"}
                  </p>
                  <div className="inline-block bg-blue-50 rounded-full px-4 py-2 text-blue-600 text-sm font-medium border border-blue-100">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 8l-3.293-3.293A1 1 0 0112 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Pelafalan: {plant.pelafalan}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Deskripsi
              </h3>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-gray-600 leading-relaxed">
                  {plant.deskripsi}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
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
                Manfaat Kesehatan
              </h3>
              <ul className="space-y-2">
                {plant.manfaat &&
                  plant.manfaat.map((manfaat, index) => (
                    <li
                      key={index}
                      className="bg-green-50 rounded-lg p-3 border border-green-100 flex items-start"
                    >
                      <svg
                        className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">{manfaat}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mb-6">
            <Link
              href="/plants"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Kembali ke Daftar Tanaman
            </Link>
          </div>
        </div>
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
