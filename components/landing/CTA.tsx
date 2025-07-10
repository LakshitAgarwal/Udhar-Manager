import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { CardSpotlight } from "../ui/card-spotlight";

export function CTA() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      {/* Main CTA Card */}
      <CardSpotlight className="w-full" color="#1f2937">
        <div className="relative z-20 text-center py-16 px-8">
          {/* Badge */}
          <div className="text-green-400 text-xs border border-green-400 rounded-full px-4 py-2 w-fit mx-auto mb-8 shadow-lg shadow-green-400/30 bg-green-400/10 backdrop-blur-sm">
            💸 Ready to Get Started?
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-200 dark:via-white dark:to-white leading-tight mb-6">
            Start managing your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              financial relationships
            </span>{" "}
            today
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Join thousands who have transformed awkward money conversations into
            seamless, automated processes. No more uncomfortable follow-ups—just
            smart, relationship-friendly debt management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HoverBorderGradient
              containerClassName="rounded-full w-fit"
              as="button"
              className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 font-medium hover:scale-105 transition-all duration-300 text-lg"
            >
              Start Managing Udhaar 🚀
            </HoverBorderGradient>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                100%
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Free to Start
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                2 min
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Setup Time
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                24/7
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Automated Tracking
              </p>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}
