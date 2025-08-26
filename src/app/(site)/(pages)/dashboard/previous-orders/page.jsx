"use client";

import { useState, useRef, useEffect } from "react";

export default function DashboardPage() {
    // Track open dropdown by row index
    const [openIndex, setOpenIndex] = useState(null);
    const dropdownRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check all refs
            if (!dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
                setOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const buttonDropdown = (index) => (
        <div
            className="relative inline-block"
            ref={(el) => { dropdownRefs.current[index] = el; }}
        >
            <button
                onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                }
                type="button"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                </svg>
            </button>

            {openIndex === index && (
                <div className="absolute right-[-5.5rem] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm z-[99999999999999] dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                        <li className="border-b py-2 px-3 border-[#fff]">
                            <button>Pay Due Payment</button>
                        </li>
                        <li className="border-b py-2 px-3 border-[#fff]">
                            <button>Repeat Order</button>
                        </li>
                        <li className="border-b py-2 px-3 border-[#fff]">
                            <button>Download Recipet</button>
                        </li>
                        <li className="border-b py-2 px-3 border-[#fff]">
                            <button>Complain</button>
                        </li>
                        <li className="border-b py-2 px-3 border-[#fff]">
                            <button>Download Invoice</button>
                        </li>
                        <li className="border-b py-2 px-3 border-[#fff]">
                            <button>Support</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );

    const rows = [
        { date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
        { date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-dark">Previous Orders</h1>

            <div className="overflow-x-auto overflow-visible">
                <div className="relative overflow-x-auto overflow-visible h-100">
                    <table className="w-full text-sm text-left rtl:text-right text-dark">
                        <thead className="text-xs text-white uppercase bg-blue">
                            <tr>
                                <th className="px-6 py-5">Order Date</th>
                                <th className="px-6 py-3">Order Number</th>
                                <th className="px-6 py-3">Total Amount</th>
                                <th className="px-6 py-3">Paid Amount</th>
                                <th className="px-6 py-3">Balance Due</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-[#ccc]">
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.date}</th>
                                    <td className="px-6 py-4">{row.number}</td>
                                    <td className="px-6 py-4">{row.total}</td>
                                    <td className="px-6 py-4">{row.paid}</td>
                                    <td className="px-6 py-4">{row.balance}</td>
                                    <td className="px-6 py-4 relative overflow-visible">{buttonDropdown(i)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
