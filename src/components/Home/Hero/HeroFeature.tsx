"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { heroFeaturesTranslations } from "@/data";

const featureImages = [
  "/images/icons/icon-01.svg",
  "/images/icons/icon-02.svg",
  "/images/icons/icon-03.svg",
  "/images/icons/icon-04.svg",
];

const HeroFeature = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const features = heroFeaturesTranslations[lang] || heroFeaturesTranslations.en;

  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {features.map((item, index) => (
          <div className="flex items-center gap-4" key={index}>
            <Image
              src={featureImages[index]}
              alt={item.title}
              width={40}
              height={41}
            />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
