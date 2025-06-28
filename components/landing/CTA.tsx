import { Vortex } from "../ui/vortex";

export const CTA = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Ready to take control?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Start managing your finances smarter. Track expenses, manage debts,
          and achieve your financial goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          <button className="group relative px-8 py-3 border-2 border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm">
            <span className="relative z-10">Explore Features</span>
          </button>
        </div>
      </Vortex>
    </div>
  );
};
