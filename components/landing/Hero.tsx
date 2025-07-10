import { Cover } from "../ui/cover";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 px-4">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-tight">
          Track your udhaar. Get your <Cover>paisa back.</Cover>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mt-7 max-w-2xl mx-auto leading-relaxed">
          Forget awkward follow-ups — add the udhaar details once, and we’ll
          remind them via WhatsApp when it’s due.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="px-8 py-3 rounded-full bg-white cursor-pointer dark:bg-black text-black dark:text-white font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border border-neutral-200 dark:border-neutral-800">
            Start Managing Udhaar 🚀
          </button>
          <button className="px-8 py-3 rounded-full border border-neutral-300 cursor-pointer dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );
};
