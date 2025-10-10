"use client";
import React from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductItem = ({ item, pageTitle }: { item: Product; pageTitle: string }) => {
  console.log(item);

  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>();
  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  const handleViewProduct = () => {
    localStorage.setItem('productDetails', JSON.stringify(item))
  }

  const photos = JSON.parse(item.photo || "[]");

  return (
    <Link href={`/categories/${pageTitle}/${item.slug}?subId=${item?.encrypted_id}/`} className="cursor-pointer group" onClick={handleViewProduct}>
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <img
          src={photos[0] || '/images/no-image.jpg'}
          alt=""
          width={250}
          height={250}
          style={{ width: '100%', height: '280px', objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105 rounded-lg"
        />

      </div>

      <div className="flex items-center justify-between gap-2">
        <h3
          className="font-medium text-lg text-dark ease-out duration-200 hover:text-blue"
          onClick={() => handleProductDetails()}
        >
          <Link href="/shop-details"> {item.name} </Link>
        </h3>
      </div>
    </Link>
  );
};

export default ProductItem;
