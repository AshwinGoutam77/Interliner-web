'use client';
import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { promoTranslations } from "@/data";
import { useSelector } from "react-redux";

const Hero = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const promos = promoTranslations[lang] || promoTranslations.en;
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              {promos.map((item, i) => (
                <div
                  key={i}
                  className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5"
                >
                  <div className="flex items-center gap-14">
                    <div>
                      <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-10">
                        <a href="#">{item.title}</a>
                      </h2>

                      <div>
                        {item.description && (
                          <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                            {item.description}
                          </p>
                        )}
                        <div>
                          <span className="flex items-center gap-3">
                            <span className="font-medium text-heading-5 text-red">
                              {item.price}
                            </span>
                            <span className="font-medium text-2xl text-dark-4 line-through">
                              {item.oldPrice}
                            </span>
                          </span>
                          <a
                            href="#"
                            className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-2"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={123}
                        height={161}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
