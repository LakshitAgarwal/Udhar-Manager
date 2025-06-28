import { CardSpotlight } from "../ui/card-spotlight";

export const WhatWeOffer = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="text-green-400 text-xs border border-green-400 rounded-full px-4 py-2 w-fit mx-auto mb-6 shadow-lg shadow-green-400/30 bg-green-400/10 backdrop-blur-sm">
          💰 What We Offer
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-200 dark:via-white dark:to-white leading-tight mb-6">
          Everything you need to manage your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
            financial relationships
          </span>
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          From tracking loans to automated reminders, we&apos;ve got all the
          tools to make debt management stress-free and relationship-friendly.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Feature 1 - Smart Tracking */}
        <CardSpotlight className="h-80 w-full" color="#1f2937">
          <div className="relative z-20">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Smart Debt Tracking
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Effortlessly track all your loans, borrowings, and lendings in one
              place with intuitive dashboards and real-time updates.
            </p>
          </div>
        </CardSpotlight>

        {/* Feature 2 - WhatsApp Integration */}
        <CardSpotlight className="h-80 w-full" color="#1f2937">
          <div className="relative z-20">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              WhatsApp Reminders
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Automated, polite reminders sent via WhatsApp to maintain
              relationships while ensuring timely payments.
            </p>
          </div>
        </CardSpotlight>

        {/* Feature 3 - Progress Analytics */}
        <CardSpotlight className="h-80 w-full" color="#1f2937">
          <div className="relative z-20">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Progress Analytics
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Visual insights and analytics to track payment patterns, success
              rates, and debt recovery progress.
            </p>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
};
