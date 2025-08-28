"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardPage() {
    const role = useSelector((state) => state.auth.role);
    const rows = [
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false); // open immediately for sales


    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];
    const [selectedUser, setSelectedUser] = useState(role === "sales" ? users[0] : null);


    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex items-center justify-between gap-4 mb-8">
                <h1 className="text-3xl font-bold text-dark">Track Orders</h1>
                {role === "sales" && selectedUser && (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow border border-gray-200 hover:bg-gray-100"
                    >
                        <img
                            src={selectedUser.img}
                            alt={selectedUser.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{selectedUser.name}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                )}
            </div>

            <div className="overflow-x-auto overflow-visible">
                <div className="relative overflow-x-auto overflow-visible h-100">
                    <table className="w-full text-sm text-left rtl:text-right text-dark">
                        <thead className="text-xs text-white uppercase bg-blue">
                            <tr>
                                {role === "sales" && <th className="px-6 py-5">Customer Name</th>}
                                <th className="px-6 py-5">Order Date</th>
                                <th className="px-6 py-3">Order Number</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-[#ccc]">
                                    {role === "sales" && <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{selectedUser.name}</th>}
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.date}</th>
                                    <td className="px-6 py-4">{row.number}</td>
                                    <td className="px-6 py-4 relative overflow-visible"> <Link href='/dashboard/track-order/order-id=#2334' className="flex items-center text-blue">Track Order <ChevronRight color="#012169" /></Link> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {role === "sales" && isModalOpen && (
                <div className="fixed inset-0 z-[999999999] flex items-center justify-center bg-[#0000006b]">
                    <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
                        <h2 className="text-lg font-bold mb-4">Select User</h2>
                        <ul className="space-y-3">
                            {users.map((user) => (
                                <li key={user.id}>
                                    <button
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setIsModalOpen(false);
                                        }}
                                        className="flex items-center justify-between gap-3 w-full text-left px-3 py-2 rounded hover:bg-gray"
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full" />
                                            <span>{user.name}</span>
                                        </div>
                                        <ChevronRight />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
