import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import userOneImg from "../../public/user1.png";
import userTwoImg from "../../public/user2.png";
import userThreeImg from "../../public/user3.png";
import { useTranslations } from "next-intl";

export const Testimonials = () => {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      id: 1,
      key: "test1",
      infoKey: "test1Info",
      image: userOneImg,
      name: "Sarah Steiner",
    },
    {
      id: 2,
      key: "test2",
      infoKey: "test2Info",
      image: userTwoImg,
      name: "Dylan Ambrose",
    },
    {
      id: 3,
      key: "test3",
      infoKey: "test3Info",
      image: userThreeImg,
      name: "Gabrielle Winn",
    },
  ];

  return (
    <Container>
      <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center lg:place-items-start">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-5/5 lg:w-full ${index === 0 ? "lg:col-span-2 xl:col-auto" : ""}`}
          >
            <Card className="flex flex-col justify-between h-full min-h-[220px] w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-700">
              <CardContent className="flex-grow flex items-center pt-2 lg:pt-4 w-full">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify text-gray-800 dark:text-gray-100">
                  {t.rich(testimonial.key, {
                    Mark: (chunks) => <Mark>{chunks}</Mark>,
                  })}
                </p>
              </CardContent>

              <CardFooter className="border-t border-gray-300 dark:border-gray-600 pt-2">
                <Avatar
                  image={testimonial.image}
                  name={testimonial.name}
                  title={t(testimonial.infoKey)}
                />
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-13 h-13 ring-2 ring-cyan-100 dark:ring-cyan-900">
        <Image
          src={props.image}
          width="50"
          height="50"
          alt="Avatar"
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{props.name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-cyan-900 dark:text-cyan-100 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg px-2 py-1 font-semibold no-underline">
        {props.children}
      </mark>{" "}
    </>
  );
}
