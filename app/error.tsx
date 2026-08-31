"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          An unexpected error occurred while loading this page. Please try again, or contact us if the problem persists.

        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 hover:border-red-600 text-gray-900 rounded-full font-medium transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}