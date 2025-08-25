"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";

const ProductItem = ({ item }: { item: Product }) => {
  const router = useRouter()
  const { openModal } = useModalContext();

  const dispatch = useDispatch<AppDispatch>();
  const { openCartModal } = useCartModalContext();
  1
  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
    localStorage.setItem('productDetails', JSON.stringify(item))
    router.push('/shop-details')
  };

  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
    openCartModal()
  };

  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  const handleViewProduct = () => {
    localStorage.setItem('productDetails', JSON.stringify(item))
    // router.push('/shop-details')
  }

  return (
    <Link href="/shop-details" className="cursor-pointer group" onClick={handleViewProduct}>
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <Image src={item.imgs.previews[0]} alt="" width={250} height={250} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
      </div>
      <h3
        className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5"
        onClick={() => handleProductDetails()}
      >
        <Link href="/shop-details"> {item.title} </Link>
      </h3>

      <span className="flex items-center gap-2 font-medium text-lg">
        <span className="text-dark">${item.discountedPrice}</span>
        <span className="text-dark-4 line-through">${item.price}</span>
      </span>
    </Link>
  );
};

export default ProductItem;
