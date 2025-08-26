import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="mb-5">
          <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_834_7356)">
                <path
                  d="M3.94024 13.4474C2.6523 12.1595 2.00832 11.5155 1.7687 10.68C1.52908 9.84449 1.73387 8.9571 2.14343 7.18231L2.37962 6.15883C2.72419 4.66569 2.89648 3.91912 3.40771 3.40789C3.91894 2.89666 4.66551 2.72437 6.15865 2.3798L7.18213 2.14361C8.95692 1.73405 9.84431 1.52927 10.6798 1.76889C11.5153 2.00851 12.1593 2.65248 13.4472 3.94042L14.9719 5.46512C17.2128 7.70594 18.3332 8.82635 18.3332 10.2186C18.3332 11.6109 17.2128 12.7313 14.9719 14.9721C12.7311 17.2129 11.6107 18.3334 10.2184 18.3334C8.82617 18.3334 7.70576 17.2129 5.46494 14.9721L3.94024 13.4474Z"
                  stroke="#012169"
                  strokeWidth="1.5"
                />
                <circle
                  cx="7.17245"
                  cy="7.39917"
                  r="1.66667"
                  transform="rotate(-45 7.17245 7.39917)"
                  stroke="#012169"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.61837 15.4164L15.4342 9.6004"
                  stroke="#012169"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_834_7356">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Categories
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
            Browse by Category
          </h2>
        </div>
        {/* <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Trousers
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              High-Waist Trousers
            </h2>

            <p>
              Tailored for both comfort and style, these  Trousers feature a flattering fit that elongates your legs and defines your waistline.
            </p>

            <a
              href="/categories/shirts"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Shop Now
            </a>
          </div>

          <Image
            src="/images/banner/banner-image-5.png"
            alt="promo img"
            className="absolute bottom-0 top-1 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div> */}
        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-12">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 lg:col-span-7">
            <Image
              src="/images/banner/banner-image-3.png"
              alt="promo img"
              className="absolute top-1/3 -translate-y-1/2 left-0 sm:left-0 -z-1"
              // width={215}
              // height={241}
              width={300}
              height={200}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Shirt
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Premium Shirt
              </h2>
              {/* <p>
                Tailored for both comfort and style, these  Trousers feature a flattering fit that elongates your legs and defines your waistline.
              </p> */}

              {/* <p className="font-semibold text-custom-1 text-teal">
                Flat 20% off
              </p> */}

              <Link
                href="/categories/shirts"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 lg:col-span-5">
            <Image
              src="/images/banner/banner-image-9.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[10px] -z-1"
              width={220}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Classic Wear
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-3.5">
                Kandura
              </h2>
              {/* 
              <p className="max-w-[285px] text-custom-sm">
                Stay warm, stylish, and comfortable wherever you go.
              </p> */}

              <Link
                href="/categories/shirts"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-12 mt-8">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 lg:col-span-5">
            <Image
              src="/images/banner/banner-image-5.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[-20px] -z-1"
              width={220}
              height={241}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Trousers
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                High-Waist <br /> Trousers
              </h2>

              <Link
                href="/categories/shirts"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Shop Now
              </Link>
            </div>
          </div>
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 lg:col-span-7">
            <Image
              src="/images/banner/banner-image-6.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-0 -z-1"
              width={215}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Blazer to elevate your workwear
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Tailored blazer.
              </h2>

              <Link
                href="/categories/shirts"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-12 mt-8">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 lg:col-span-7">
            <Image
              src="/images/banner/banner-image-4.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-0 -z-1"
              width={315}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Blazer to elevate your workwear
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Women Clothes
              </h2>

              <Link
                href="/categories/shirts"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 lg:col-span-5">
            <Image
              src="/images/banner/banner-image-7.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[-20px] -z-1"
              width={300}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Cozy Hoodies
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                T-Shirts & <br />Hoodies
              </h2>

              <Link
                href="/categories/shirts"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PromoBanner;
