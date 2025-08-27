"use client";
import React, { use, useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "./RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cart-slice";

const ShopDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeColor, setActiveColor] = useState("White");
  const { openPreviewModal } = usePreviewSlider();
  const [previewImg, setPreviewImg] = useState(0);

  const [storage, setStorage] = useState("gb128");
  const [type, setType] = useState("active");
  const [sim, setSim] = useState("No");
  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("tabOne");

  const storages = [
    {
      id: "gb128",
      title: "36 Inch",
    },
    {
      id: "gb256",
      title: "44 Inch",
    },
    {
      id: "gb512",
      title: "60 Inch",
    },
  ];

  const types = [
    {
      id: "active",
      title: "25 Mtr",
    },

    {
      id: "inactive",
      title: "30 Mtr",
    },

    {
      id: "inactive",
      title: "100 Mtr",
    },
  ];

  const sims = [
    {
      id: "No",
      title: "No",
    },

    {
      id: "yes",
      title: "Yes",
    },
  ];

  const tabs = [
    {
      id: "tabOne",
      title: "Description",
    },
    {
      id: "tabTwo",
      title: "Additional Information",
    },
    {
      id: "tabThree",
      title: "Reviews",
    },
  ];

  const colors = [
    { name: "White", hex: "#fcfcfcff" },
    { name: "Off White", hex: "#f7f7f7" },
    { name: "Blue White", hex: "#dceeff" },
    { name: "Cream", hex: "#f5f0e6" },
  ];


  const alreadyExist = localStorage.getItem("productDetails");
  const productFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );

  const product = alreadyExist ? JSON.parse(alreadyExist) : productFromStorage;

  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(product));
  }, [product]);

  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  const [inchQuantities, setInchQuantities] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const inchesList = Array.from({ length: 8 }, (_, i) => (1 + i * 0.5).toString());

  const handleSaveCutRolls = () => {
    setModalOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  return (
    <>
      {product.title === "" ? (
        "Please add product"
      ) : (
        <>
          <section className="overflow-hidden relative pb-20 pt-25 lg:pt-20 xl:pt-28 bg-[#f3f4f62e]">
            <Breadcrumb title={"Straight Cut"} pages={["Categories/  Straight Cut"]} />

            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
                <div className="lg:max-w-[570px] w-full">
                  <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                    <div>
                      <button
                        onClick={handlePreviewSlider}
                        aria-label="button for zoom"
                        className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
                      >
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.11493 1.14581L9.16665 1.14581C9.54634 1.14581 9.85415 1.45362 9.85415 1.83331C9.85415 2.21301 9.54634 2.52081 9.16665 2.52081C7.41873 2.52081 6.17695 2.52227 5.23492 2.64893C4.31268 2.77292 3.78133 3.00545 3.39339 3.39339C3.00545 3.78133 2.77292 4.31268 2.64893 5.23492C2.52227 6.17695 2.52081 7.41873 2.52081 9.16665C2.52081 9.54634 2.21301 9.85415 1.83331 9.85415C1.45362 9.85415 1.14581 9.54634 1.14581 9.16665L1.14581 9.11493C1.1458 7.43032 1.14579 6.09599 1.28619 5.05171C1.43068 3.97699 1.73512 3.10712 2.42112 2.42112C3.10712 1.73512 3.97699 1.43068 5.05171 1.28619C6.09599 1.14579 7.43032 1.1458 9.11493 1.14581ZM16.765 2.64893C15.823 2.52227 14.5812 2.52081 12.8333 2.52081C12.4536 2.52081 12.1458 2.21301 12.1458 1.83331C12.1458 1.45362 12.4536 1.14581 12.8333 1.14581L12.885 1.14581C14.5696 1.1458 15.904 1.14579 16.9483 1.28619C18.023 1.43068 18.8928 1.73512 19.5788 2.42112C20.2648 3.10712 20.5693 3.97699 20.7138 5.05171C20.8542 6.09599 20.8542 7.43032 20.8541 9.11494V9.16665C20.8541 9.54634 20.5463 9.85415 20.1666 9.85415C19.787 9.85415 19.4791 9.54634 19.4791 9.16665C19.4791 7.41873 19.4777 6.17695 19.351 5.23492C19.227 4.31268 18.9945 3.78133 18.6066 3.39339C18.2186 3.00545 17.6873 2.77292 16.765 2.64893ZM1.83331 12.1458C2.21301 12.1458 2.52081 12.4536 2.52081 12.8333C2.52081 14.5812 2.52227 15.823 2.64893 16.765C2.77292 17.6873 3.00545 18.2186 3.39339 18.6066C3.78133 18.9945 4.31268 19.227 5.23492 19.351C6.17695 19.4777 7.41873 19.4791 9.16665 19.4791C9.54634 19.4791 9.85415 19.787 9.85415 20.1666C9.85415 20.5463 9.54634 20.8541 9.16665 20.8541H9.11494C7.43032 20.8542 6.09599 20.8542 5.05171 20.7138C3.97699 20.5693 3.10712 20.2648 2.42112 19.5788C1.73512 18.8928 1.43068 18.023 1.28619 16.9483C1.14579 15.904 1.1458 14.5696 1.14581 12.885L1.14581 12.8333C1.14581 12.4536 1.45362 12.1458 1.83331 12.1458ZM20.1666 12.1458C20.5463 12.1458 20.8541 12.4536 20.8541 12.8333V12.885C20.8542 14.5696 20.8542 15.904 20.7138 16.9483C20.5693 18.023 20.2648 18.8928 19.5788 19.5788C18.8928 20.2648 18.023 20.5693 16.9483 20.7138C15.904 20.8542 14.5696 20.8542 12.885 20.8541H12.8333C12.4536 20.8541 12.1458 20.5463 12.1458 20.1666C12.1458 19.787 12.4536 19.4791 12.8333 19.4791C14.5812 19.4791 15.823 19.4777 16.765 19.351C17.6873 19.227 18.2186 18.9945 18.6066 18.6066C18.9945 18.2186 19.227 17.6873 19.351 16.765C19.4777 15.823 19.4791 14.5812 19.4791 12.8333C19.4791 12.4536 19.787 12.1458 20.1666 12.1458Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      <Image
                        src={product.imgs?.previews[previewImg]}
                        alt="products-details"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>

                  {/* ?  &apos;border-blue &apos; :  &apos;border-transparent&apos; */}
                  <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                    {product.imgs?.thumbnails.map((item, key) => (
                      <button
                        onClick={() => setPreviewImg(key)}
                        key={key}
                        className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${key === previewImg
                          ? "border-blue"
                          : "border-transparent"
                          }`}
                      >
                        <Image
                          width={50}
                          height={50}
                          src={item}
                          alt="thumbnail"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* <!-- product content --> */}
                <div className="max-w-[539px] w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-medium text-custom-1 mb-0">
                      <span className="text-sm sm:text-base text-dark">
                        Price: ${product.price}
                      </span>
                    </h3>

                    <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                      30% OFF
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2.5">
                      Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.
                    </li>
                  </ul>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-4.5 border-y border-gray-3 mt-7 mb-9 py-7">
                      {/* <!-- details item --> */}
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="min-w-[65px]">
                          <h4 className="font-medium text-dark">Shades:</h4>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                              {colors.map((color, key) => (
                                <label
                                  key={key}
                                  htmlFor={color.name}
                                  className={`cursor-pointer select-none flex flex-col items-center rounded-lg p-2 transition 
                                              ${activeColor === color.name ? "border-[1px] border-blue-100" : "border-[1px] border-[#ccc]"} `}>
                                  <input
                                    type="radio"
                                    name="color"
                                    id={color.name}
                                    className="sr-only"
                                    onChange={() => setActiveColor(color.name)}
                                  />

                                  {/* Color box */}
                                  <div
                                    className="w-16 h-12 rounded-md"
                                    style={{ backgroundColor: color.hex }}
                                  ></div>

                                  {/* Label */}
                                  <span
                                    className={`mt-2 text-sm ${activeColor === color.name
                                      ? "font-semibold text-blue-500"
                                      : ""
                                      }`}
                                  >
                                    {color.name}
                                  </span>
                                </label>
                              ))}
                            </div>

                          </div>

                        </div>
                      </div>

                      {/* <!-- details item --> */}
                      <div className="flex items-center gap-4">
                        <div className="min-w-[65px]">
                          <h4 className="font-medium text-dark">Width:</h4>
                        </div>

                        <div className="flex items-center gap-4">
                          {storages.map((item, key) => (
                            <label
                              key={key}
                              htmlFor={item.id}
                              className="flex cursor-pointer select-none items-center"
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  name="storage"
                                  id={item.id}
                                  className="sr-only"
                                  onChange={() => setStorage(item.id)}
                                />

                                {/*  */}
                                <div
                                  className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${storage === item.id
                                    ? "border-blue bg-blue"
                                    : "border-gray-4"
                                    } `}
                                >
                                  <span
                                    className={
                                      storage === item.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }
                                  >
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="4"
                                        y="4.00006"
                                        width="16"
                                        height="16"
                                        rx="4"
                                        fill="#012169"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.3103 9.25104C16.471 9.41178 16.5612 9.62978 16.5612 9.85707C16.5612 10.0844 16.471 10.3024 16.3103 10.4631L12.0243 14.7491C11.8635 14.9098 11.6455 15.0001 11.4182 15.0001C11.191 15.0001 10.973 14.9098 10.8122 14.7491L8.24062 12.1775C8.08448 12.0158 7.99808 11.7993 8.00003 11.5745C8.00199 11.3498 8.09214 11.1348 8.25107 10.9759C8.41 10.8169 8.62499 10.7268 8.84975 10.7248C9.0745 10.7229 9.29103 10.8093 9.4527 10.9654L11.4182 12.931L15.0982 9.25104C15.2589 9.09034 15.4769 9.00006 15.7042 9.00006C15.9315 9.00006 16.1495 9.09034 16.3103 9.25104Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              {item.title}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* // <!-- details item --> */}
                      <div className="flex items-center gap-4">
                        <div className="min-w-[65px]">
                          <h4 className="font-medium text-dark">Length:</h4>
                        </div>

                        <div className="flex items-center gap-4">
                          {types.map((item, key) => (
                            <label
                              key={key}
                              htmlFor={item.id}
                              className="flex cursor-pointer select-none items-center"
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  name="storage"
                                  id={item.id}
                                  className="sr-only"
                                  onChange={() => setType(item.id)}
                                />

                                {/*  */}
                                <div
                                  className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${type === item.id
                                    ? "border-blue bg-blue"
                                    : "border-gray-4"
                                    } `}
                                >
                                  <span
                                    className={
                                      type === item.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }
                                  >
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="4"
                                        y="4.00006"
                                        width="16"
                                        height="16"
                                        rx="4"
                                        fill="#012169"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.3103 9.25104C16.471 9.41178 16.5612 9.62978 16.5612 9.85707C16.5612 10.0844 16.471 10.3024 16.3103 10.4631L12.0243 14.7491C11.8635 14.9098 11.6455 15.0001 11.4182 15.0001C11.191 15.0001 10.973 14.9098 10.8122 14.7491L8.24062 12.1775C8.08448 12.0158 7.99808 11.7993 8.00003 11.5745C8.00199 11.3498 8.09214 11.1348 8.25107 10.9759C8.41 10.8169 8.62499 10.7268 8.84975 10.7248C9.0745 10.7229 9.29103 10.8093 9.4527 10.9654L11.4182 12.931L15.0982 9.25104C15.2589 9.09034 15.4769 9.00006 15.7042 9.00006C15.9315 9.00006 16.1495 9.09034 16.3103 9.25104Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              {item.title}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-dark mb-2">Number of un-cut rolls:</h4>
                        <input type="number" placeholder="" className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20" />
                      </div>

                      {/* // <!-- details item --> */}
                      <div className="flex items-center gap-4">
                        <div className="min-w-[65px]">
                          <h4 className="font-medium text-dark">Do you want cut rolls:</h4>
                        </div>

                        <div className="flex items-center gap-4">
                          {sims.map((item, key) => (
                            <label
                              key={key}
                              htmlFor={item.id}
                              className="flex cursor-pointer select-none items-center"
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  name="storage"
                                  id={item.id}
                                  className="sr-only"
                                  onChange={() => { setSim(item.id); setModalOpen(item.id == 'yes' && true); }}
                                />
                                <div
                                  className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${sim === item.id
                                    ? "border-blue bg-blue"
                                    : "border-gray-4"
                                    } `}
                                >
                                  <span
                                    className={
                                      sim === item.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }
                                  >
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="4"
                                        y="4.00006"
                                        width="16"
                                        height="16"
                                        rx="4"
                                        fill="#012169"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.3103 9.25104C16.471 9.41178 16.5612 9.62978 16.5612 9.85707C16.5612 10.0844 16.471 10.3024 16.3103 10.4631L12.0243 14.7491C11.8635 14.9098 11.6455 15.0001 11.4182 15.0001C11.191 15.0001 10.973 14.9098 10.8122 14.7491L8.24062 12.1775C8.08448 12.0158 7.99808 11.7993 8.00003 11.5745C8.00199 11.3498 8.09214 11.1348 8.25107 10.9759C8.41 10.8169 8.62499 10.7268 8.84975 10.7248C9.0745 10.7229 9.29103 10.8093 9.4527 10.9654L11.4182 12.931L15.0982 9.25104C15.2589 9.09034 15.4769 9.00006 15.7042 9.00006C15.9315 9.00006 16.1495 9.09034 16.3103 9.25104Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              {item.title}
                            </label>
                          ))}
                        </div>

                        {/* Cuts Modal */}
                        {modalOpen && (
                          <div className="fixed inset-0 z-[999999999999999] mt-0 flex items-center justify-center px-2">
                            <div
                              className="absolute inset-0 bg-[#0000006b]"
                              onClick={() => setModalOpen(false)}
                            />

                            {/* Modal content */}
                            <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 ">
                              {/* Header */}
                              <div className="flex items-center justify-between border-b border-[#ccc] pb-3">
                                <h2 className="text-lg font-semibold">Enter Pieces for Each Size</h2>
                                <button
                                  onClick={() => setModalOpen(false)}
                                  className="p-1 hover:bg-gray-100 rounded-full"
                                >
                                  ✕
                                </button>
                              </div>
                              <div className="max-h-[600px] overflow-y-auto my-4 space-y-4">
                                {inchesList.map((inch) => (
                                  <div key={inch} className="flex items-center justify-between gap-4">
                                    <span className="font-medium">{inch}</span>
                                    <input
                                      type="number"
                                      className="border border-[#ccc] rounded-md px-3 py-1 w-28 focus:outline-none focus:ring focus:ring-0"
                                      value={inchQuantities[inch] || ""}
                                      onChange={(e) =>
                                        setInchQuantities((prev) => ({
                                          ...prev,
                                          [inch]: e.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center justify-between border-t border-[#ccc] pt-3">
                                <span className="font-medium text-gray-700">Total: 33 Inches</span>
                                <span className="font-medium text-gray-700">No. of Coils: 1</span>
                              </div>
                              <button
                                onClick={handleSaveCutRolls}
                                className="mt-4 primary-btn"
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4.5">
                      <div className="flex items-center rounded-md border border-gray-3">
                        <button
                          aria-label="button for remove product"
                          className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                        >
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z"
                              fill=""
                            />
                          </svg>
                        </button>

                        <span className="flex items-center justify-center w-16 h-12 border-x border-gray-4">
                          {quantity}
                        </span>

                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          aria-label="button for add product"
                          className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                        >
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                              fill=""
                            />
                            <path
                              d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>

                      <button
                        onClick={() => { setIsOpen(true); handleAddToCart(product) }}
                        className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                      >
                        Add to Cart
                      </button>
                      {isOpen && (
                        <div className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[9999999999]" onClick={() => setIsOpen(false)}>
                          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-sm p-6 relative" onClick={(e) => e.stopPropagation()}>
                            {/* Close Icon */}
                            <button
                              onClick={() => setIsOpen(false)}
                              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                            >
                              ×
                            </button>

                            {/* Modal Content */}
                            <h2 className="text-lg font-semibold text-dark mb-4 text-center">
                              Item has been added to cart
                            </h2>

                            <div className="flex flex-wrap justify-center gap-3 mt-6">
                              {/* Continue Shopping */}
                              <Link
                                href="/shop-with-sidebar"
                                className="secondary-btn text-center"
                              >
                                Continue Shopping
                              </Link>

                              {/* Checkout */}
                              <Link
                                href="/checkout"
                                className="primary-btn text-center"
                              >
                                Checkout
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <RecentlyViewdItems />

          <Newsletter />
        </>
      )}
    </>
  );
};

export default ShopDetails;
