"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";
import { NewArrivalTranslations } from "@/data";

const NewArrival = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const header = NewArrivalTranslations[lang] || NewArrivalTranslations.en;

  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section title */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
              {/* SVG icon */}
              {header.subtitle}
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              {header.title}
            </h2>
          </div>

          <Link
            href="/shop-with-sidebar"
            className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            {header.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {/* New Arrivals items */}
          {shopData.map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
