import React from "react";
import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export const Cta = () => {
  const t = useTranslations("RootPage");
  return (
    <Container className="py-6 sm:py-4 lg:py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full max-w-5xl mx-auto text-white bg-gradient-to-r from-cyan-600 to-cyan-700 dark:from-cyan-700 dark:to-cyan-800 px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex-grow text-center sm:text-left order-2 sm:order-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
            {t("tryMoreSectionText1")}
          </h2>
          <p className="mt-1 sm:mt-2 font-medium text-white text-opacity-90 text-sm sm:text-base lg:text-lg">
            {t("tryMoreSectionText2")}
          </p>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto order-1 sm:order-2">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-center text-cyan-600 bg-white dark:bg-gray-50 rounded-lg px-4 sm:px-8 lg:px-10 hover:bg-gray-50 dark:hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-600"
          >
            {t("learnMoreButton")}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          </a>
        </div>
      </div>
    </Container>
  );
};
