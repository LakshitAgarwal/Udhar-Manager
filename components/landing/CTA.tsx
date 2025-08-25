import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { CardSpotlight } from "../ui/card-spotlight";

export function CTA() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      {/* Main CTA Card */}
      <CardSpotlight className="w-full" color="#1f2937">
        <div className="relative z-20 text-center py-16 px-8">
          {/* Badge */}
          <div className="text-neutral-400 text-xs border border-neutral-700 rounded-full px-4 py-2 w-fit mx-auto mb-8 bg-neutral-900/50 backdrop-blur-sm">
            Start your transformation
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-300 leading-tight mb-6 tracking-tight">
            Ready to scale your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
              reputation?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
            Join the elite tier of businesses that leverage intelligent
            automation to systematically build unshakeable market trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HoverBorderGradient
              containerClassName="rounded-full w-fit"
              as="button"
              className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 font-medium hover:scale-105 transition-all duration-300 text-lg"
            >
              Begin 14-day trial
            </HoverBorderGradient>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                14-Day
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Free Trial
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                White-glove
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Onboarding
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                Enterprise
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Support
              </p>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}
