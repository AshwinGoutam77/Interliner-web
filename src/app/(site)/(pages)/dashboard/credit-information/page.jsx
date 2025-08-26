"use client";

import { useState, useRef, useEffect } from "react";

export default function Page() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-dark">Credit Information</h1>

            <div className="overflow-x-auto overflow-visible">
                <div className="relative overflow-x-auto overflow-visible h-100">
                    <table className="w-full text-sm text-left rtl:text-right text-dark">
                        <thead className="text-xs text-white uppercase bg-blue">
                            <tr>
                                <th className="px-6 py-5">Total Credit Limit </th>
                                <th className="px-6 py-3">Credit Amount Used</th>
                                <th className="px-6 py-3">Balance Credit Available</th>
                                <th className="px-6 py-3">Total Credit Period</th>
                                <th className="px-6 py-3">Balance Credit Period</th>
                                <th className="px-6 py-3">Payment Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-[#ccc]">
                                <td className="px-6 py-4">4000</td>
                                <td className="px-6 py-4">2000</td>
                                <td className="px-6 py-4">1000</td>
                                <td className="px-6 py-4">10 Days</td>
                                <td className="px-6 py-4">8 Days</td>
                                <td className="px-6 py-4">24/08/2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
