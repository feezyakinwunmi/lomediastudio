import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg py-24">
        <p className="text-red-600 font-semibold text-sm tracking-widest mb-2">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn&apos;t exist, was moved, or is no longer available. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 hover:border-red-600 text-gray-900 rounded-full font-medium transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}