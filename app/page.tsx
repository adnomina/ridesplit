export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl px-6 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            RideSplit
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            A digital driver&apos;s log for people who share a car
          </p>

          {/* Demo Tailwind utility classes */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Track Trips
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Log your drives with ease
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Share Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collaborate with other drivers
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                View Reports
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyze usage patterns
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
