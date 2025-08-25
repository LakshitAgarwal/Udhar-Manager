"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Vouchly's intelligence platform drove a 340% increase in our review velocity while maintaining 4.9-star quality. The ROI attribution directly connected reputation growth to revenue expansion.",
    name: "Priya Sharma",
    title: "Chief Executive Officer, Premier Medical Group",
  },
  {
    quote:
      "The sophistication of Vouchly's behavioral analytics exceeded our expectations. Automated sentiment routing protected our brand while systematic engagement drove measurable competitive positioning gains.",
    name: "Rahul Verma",
    title: "Managing Director, Fitness Enterprise Network",
  },
  {
    quote:
      "Vouchly's enterprise orchestration platform transformed our customer experience strategy. The precision timing and multi-channel sequencing delivered a 30% revenue lift through reputation-driven acquisition.",
    name: "Anjali Gupta",
    title: "Chief Operating Officer, Hospitality Ventures",
  },
  {
    quote:
      "Vouchly's risk management capabilities proved invaluable for our multi-location operation. The predictive sentiment analysis and private feedback routing protected our brand equity while scaling positive exposure.",
    name: "Arjun Patel",
    title: "Chief Executive Officer, Wellness Holdings",
  },
  {
    quote:
      "The platform's AI-driven channel optimization delivered unprecedented engagement rates. Our review conversion efficiency increased 8x while maintaining the premium customer experience our brand demands.",
    name: "Sneha Reddy",
    title: "Chief Marketing Officer, Luxury Beauty Collective",
  },
  {
    quote:
      "Vouchly's systematic approach to reputation architecture transformed our market positioning. The intelligent automation and analytics dashboard provided the strategic insights needed to dominate our category.",
    name: "Vikram Singh",
    title: "Chief Executive Officer, Automotive Services Group",
  },
];

export const Reviews = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="text-neutral-400 text-xs border border-neutral-700 rounded-full px-4 py-2 w-fit mx-auto mb-6 bg-neutral-900/50 backdrop-blur-sm">
          Client testimonials
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-300 leading-tight mb-6 tracking-tight">
          Trusted by market{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
            leaders
          </span>
        </h2>

        <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed font-light">
          Leading enterprises choose Vouchly to systematically build the
          reputation that drives sustainable competitive advantage.
        </p>
      </div>

      {/* Reviews Carousel */}
      <div className="relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="py-8"
        />
      </div>
    </div>
  );
};
