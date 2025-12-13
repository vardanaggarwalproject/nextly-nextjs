"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const faqKeys = ["pt1", "pt2", "pt3", "pt4"];

export const Faq = () => {
  const t = useTranslations("FAQ");

  return (
    <Container className="py-6 sm:py-8 lg:py-10">
      <div className="w-full max-w-4xl p-1 sm:p-2 mx-auto rounded-xl sm:rounded-2xl">
        {faqKeys.map((item) => {
          const ques = t(`questions.${item}.question`);
          const ans = t(`questions.${item}.answer`);
          return (
            <div key={item} className="mb-3 sm:mb-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-left text-gray-900 dark:text-white rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 transition-all">
                      <span className="pr-3 sm:pr-4 text-xs sm:text-sm">{ques}</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-cyan-500 dark:text-cyan-400 transition-transform`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-3 sm:px-6 pt-3 pb-3 sm:pt-4 sm:pb-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed bg-white dark:bg-gray-900 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg">
                      {ans}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
