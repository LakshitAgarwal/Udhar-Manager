"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div
        className="py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full relative group"
    >
      {/* Background ambient glow */}
      <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/10 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-1000"></div>

      {/* Layered shadow system */}
      <div className="absolute inset-0 rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1),0_16px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_2px_4px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.3),0_16px_32px_rgba(0,0,0,0.2)]"></div>

      {/* Hover glow enhancement */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-indigo-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Main container with inner glow */}
      <div className="relative h-full w-full bg-white/90 dark:bg-neutral-950/90 rounded-3xl border border-neutral-200/60 dark:border-neutral-700/60 overflow-hidden backdrop-blur-xl">
        {/* Inner subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/10 rounded-3xl"></div>

        {/* Content area */}
        <div className="relative h-full w-full p-8">{children}</div>
      </div>
    </motion.div>
  );
};
