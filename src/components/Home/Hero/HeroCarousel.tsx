"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { heroTranslations } from "@/data";

const HeroCarousal = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const slides = heroTranslations[lang] || heroTranslations.en;

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="max-w-[394px] py-10 sm:py-15 lg:py-29 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                  {slide.discount}
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px] whitespace-pre-line">
                  {slide.subtitle}
                </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <a href="#">{slide.title}</a>
              </h1>

              <p>{slide.description}</p>

              <a
                href="#"
                className="primary-btn mt-10"
              >
                {slide.cta}
              </a>
            </div>

            <div className="ml-auto text-end">
              <Image
                src={`/images/banner/banner-image-${index + 1}.png`}
                alt={slide.title}
                width={351}
                height={358}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
