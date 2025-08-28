"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
    return (
        <div className="pt-60 pb-20 flex flex-col items-center justify-center bg-gray-50 px-4 bg-[#f3f4f62e]">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-lg w-full text-center m-auto">

                {/* Success Icon */}
                <div className="flex justify-center">
                    <CheckCircle className="w-20 h-20 text-green" />
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-semibold mt-6 text-dark">
                    Order Placed Successfully
                </h1>

                {/* Message */}
                <p className="text-gray-600 mt-4">
                    Thank you for your purchase! Your order has been confirmed and will be
                    shipped soon. We’ve sent you an email with the order details.
                </p>

                {/* Order Info */}
                <div className="bg-gray-100 rounded-xl p-4 mt-6 text-left">
                    <p className="text-gray-700 text-center">
                        <span className="font-medium">Order ID:</span> #12345
                    </p>
                    <p className="text-gray-700 text-center">
                        <span className="font-medium">Payment:</span> Successful
                    </p>
                    <p className="text-gray-700 text-center">
                        <span className="font-medium">Estimated Delivery:</span> 3-5 days
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/dashboard/previous-orders"
                        className="primary-btn"
                    >
                        View Orders
                    </Link>
                    <Link
                        href="/shop"
                        className="secondary-btn"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
