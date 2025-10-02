"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CategoryHeaderTranslations, CategoryTranslations } from "@/data";

const PromoBanner = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const banners = CategoryTranslations[lang] || CategoryTranslations.en;
  const header = CategoryHeaderTranslations[lang] || CategoryHeaderTranslations.en;

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-5">
          <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
            {header.subtitle}
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
            {header.title}
          </h2>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-12">
          {banners.map((item, index) => (
            <div
              key={index}
              className={`relative z-1 overflow-hidden rounded-lg py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 
        ${item.position === "right" ? "lg:col-span-7" : "lg:col-span-5"}`}
              style={{ backgroundColor: item.bgColor }}
            >
              <Image
                src={item.img}
                alt={item.title}
                className={`absolute top-1/2 -translate-y-1/2 
          ${item.position === "right" ? "left-0 sm:left-0" : "right-[-20px] sm:right-[10px]"} -z-1`}
                width={item.position === "right" ? 300 : 220}
                height={200}
              />

              <div className={item.position === "right" ? "text-right" : ""}>
                <span className="block text-lg text-dark mb-1.5">{item.category}</span>
                <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                  {item.title}
                </h2>
                <Link
                  href={item.link}
                  className={`inline-flex font-medium text-custom-sm text-white py-2.5 px-8.5 rounded-md ease-out duration-200 
            ${item.position === "right" ? "bg-teal hover:bg-teal-dark" : "bg-orange hover:bg-orange-dark"}`}
                >
                  {item.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;
