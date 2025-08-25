import { PointerHighlight } from "../ui/pointer-highlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export const Enhance = () => {
  return (
    <div className="flex items-center gap-16 my-60 px-8 max-w-7xl mx-auto">
      <div className="w-1/2 space-y-6">
        <div className="text-neutral-400 text-xs border border-neutral-700 rounded-full px-3 py-1 w-fit bg-neutral-900/50 backdrop-blur-sm">
          Advanced capabilities
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-white leading-tight">
            Precision-engineered{" "}
            <PointerHighlight>
              <span className="p-3">reputation growth</span>
            </PointerHighlight>
          </h2>

          <div className="space-y-3">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-lg font-light">
              Enterprise-grade infrastructure that orchestrates customer
              touchpoints with surgical precision. Focus on excellence while we
              build your authority.
            </p>

            <p className="text-base text-neutral-400 leading-relaxed max-w-lg font-light">
              Advanced behavioral analytics, sentiment-aware routing, and
              multi-vector engagement strategies that maximize positive outcomes
              while safeguarding brand integrity.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-3">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white cursor-pointer dark:bg-black text-black dark:text-white px-6 py-3 text-base font-semibold"
          >
            Request private demo
          </HoverBorderGradient>

          <button className="px-6 py-3 cursor-pointer rounded-full border-2 border-neutral-600 text-neutral-300 font-semibold text-base hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Success Stats */}
        <div className="flex items-center gap-6 pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">94%</div>
            <div className="text-neutral-400 text-xs">
              Customer Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">400%</div>
            <div className="text-neutral-400 text-xs">Review Growth</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">Zero</div>
            <div className="text-neutral-400 text-xs">Risk Exposure</div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="relative scale-115">
          {/* Main Dashboard Mockup */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl border border-neutral-700/50 backdrop-blur-sm min-w-[350px]">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">
                  Review Campaign
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    Live
                  </span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-neutral-200 font-medium">
                      SMS Requests
                    </span>
                    <span className="text-green-400 font-semibold">
                      24 reviews received
                    </span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full w-3/4 animate-pulse shadow-lg shadow-green-500/30"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-neutral-200 font-medium">
                      WhatsApp Requests
                    </span>
                    <span className="text-blue-400 font-semibold">
                      18 reviews received
                    </span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full w-1/2 shadow-lg shadow-blue-500/30"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-neutral-200 font-medium">
                      Email Requests
                    </span>
                    <span className="text-yellow-400 font-semibold">
                      6 reviews pending
                    </span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-400 h-3 rounded-full w-1/4 shadow-lg shadow-yellow-500/30"></div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center bg-neutral-800/50 rounded-xl p-4">
                  <div className="text-green-400 font-bold text-2xl">48</div>
                  <div className="text-neutral-300 text-sm font-medium">
                    Reviews This Month
                  </div>
                </div>
                <div className="text-center bg-neutral-800/50 rounded-xl p-4">
                  <div className="text-yellow-400 font-bold text-2xl">4.8★</div>
                  <div className="text-neutral-300 text-sm font-medium">
                    Avg Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Notification */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 shadow-xl animate-bounce max-w-[200px]">
            <div className="text-white text-sm font-bold">
              Review Request Sent!
            </div>
            <div className="text-blue-100 text-xs mt-1">
              Sarah M. received SMS request
            </div>
          </div>

          {/* Floating Success Badge */}
          <div className="absolute -bottom-4 -left-6 bg-green-500 rounded-full p-3 shadow-xl">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Additional floating elements */}
          <div className="absolute top-1/2 -left-8 bg-purple-500 rounded-lg p-2 shadow-lg animate-pulse">
            <span className="text-white text-xs font-bold">+5★</span>
          </div>

          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-3xl blur-2xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};
