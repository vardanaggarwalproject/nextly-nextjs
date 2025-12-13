import React from "react";
import { Container } from "@/components/Container";

export const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-2 mb-6 sm:mb-8 lg:mb-10 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="inline-block">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-full">
            {props.preTitle}
          </span>
        </div>
      )}

      {props.title && (
        <h2 className="max-w-3xl mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-2 sm:py-3 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
};
