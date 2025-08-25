"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function DashboardPage() {
    const rows = [
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-dark">Track Orders</h1>

            <div className="overflow-x-auto overflow-visible">
                <div className="relative overflow-x-auto overflow-visible h-100">
                    <table className="w-full text-sm text-left rtl:text-right text-dark">
                        <thead className="text-xs text-white uppercase bg-blue">
                            <tr>
                                <th className="px-6 py-5">Order Date</th>
                                <th className="px-6 py-3">Order Number</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-[#ccc]">
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.date}</th>
                                    <td className="px-6 py-4">{row.number}</td>
                                    <td className="px-6 py-4 relative overflow-visible"> <Link href='/' className="flex items-center text-blue">Track Order <ChevronRight color="#012169" /></Link> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
