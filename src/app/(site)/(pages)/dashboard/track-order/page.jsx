"use client";

import DataTableComponent from "@/components/DataTableComponent/page";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardPage() {
    const role = useSelector((state) => state.auth.role);
    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];
    const [selectedUser, setSelectedUser] = useState(role === "sales" ? users[0] : null);
    const rows = [
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
        { date: "02/08/2025", number: "#2344" },
        { date: "08/08/2025", number: "#3434" },
    ];

    const orderColumns = [
        ...(role === "sales"
            ? [
                {
                    name: "Customer Name",
                    selector: () => selectedUser.name ?? "",
                },
            ]
            : []),
        {
            name: "Order Date",
            selector: row => row.date,
        },
        {
            name: "Order Number",
            selector: row => row.number,
        },
        {
            name: "",
            cell: (row) => (
                <Link
                    href={`/dashboard/track-order/order-id=${row.number.replace("#", "")}`}
                    className="flex items-center text-blue cursor-pointer"
                >
                    Track Order <ChevronRight color="#012169" />
                </Link>
            ),
        },

    ];


    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-6 bg-gray-50 lg:mt-0 md:mt-10 min-h-screen">
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
                    <DataTableComponent columns={orderColumns} data={rows} />
                </div>
            </div>

            {role === "sales" && isModalOpen && (
                <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#0000006b]" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white rounded-lg shadow-lg w-[400px] p-6" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold mb-4">Select Customer</h2>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Search Customer"
                            className="mb-4 rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
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
                        <button className='primary-btn mt-4 ml-auto' onClick={() => setIsModalOpen(false)}>Clear All</button>
                    </div>
                </div>
            )}
        </div>
    );
}
