"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Finally, no more awkward conversations about money! The WhatsApp reminders are so polite and professional. I got back ₹25,000 that I thought was lost forever. This app saved my relationships and my wallet.",
    name: "Priya Sharma",
    title: "Small Business Owner, Mumbai",
  },
  {
    quote:
      "I used to maintain a messy notebook for tracking loans. This platform changed everything - beautiful dashboard, automatic reminders, and 100% recovery rate. My friends actually appreciate the gentle nudges!",
    name: "Rahul Verma",
    title: "Software Engineer, Bangalore",
  },
  {
    quote:
      "As someone who lends money frequently, this app is a lifesaver. The analytics show me who pays on time, and the automated system maintains relationships while ensuring I get paid back.",
    name: "Anjali Gupta",
    title: "Freelance Consultant, Delhi",
  },
  {
    quote:
      "I was skeptical about debt management apps, but this one actually works. The interface is intuitive, reminders are respectful, and I&apos;ve recovered 95% of my outstanding loans within 3 months.",
    name: "Arjun Patel",
    title: "Marketing Manager, Pune",
  },
  {
    quote:
      "The multi-currency feature is amazing for my international business. No more tracking USD and INR loans separately. The conversion rates are accurate and the WhatsApp integration is seamless.",
    name: "Sneha Reddy",
    title: "Import/Export Business, Chennai",
  },
  {
    quote:
      "Lost friendships over money are now a thing of the past. The polite reminder system works perfectly - my friends pay back without any friction, and our relationships remain strong.",
    name: "Vikram Singh",
    title: "Real Estate Agent, Gurgaon",
  },
];

export const Reviews = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="text-purple-400 text-xs border border-purple-400 rounded-full px-4 py-2 w-fit mx-auto mb-6 shadow-lg shadow-purple-400/30 bg-purple-400/10 backdrop-blur-sm">
          ⭐ Customer Reviews
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-200 dark:via-white dark:to-white leading-tight mb-6">
          What our users say about{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            getting their money back
          </span>
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Join thousands of satisfied users who&apos;ve successfully recovered
          their money while maintaining great relationships.
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
