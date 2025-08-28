"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function DashboardPage() {
    const role = useSelector((state) => state.auth.role);

    // Track open dropdown by row index
    const [openIndex, setOpenIndex] = useState(null);
    const dropdownRefs = useRef([]);

    // For sales: user selector
    const [isModalOpen, setIsModalOpen] = useState(false); // open immediately for sales
    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];
    const [selectedUser, setSelectedUser] = useState(role === "sales" ? users[0] : null);

    useEffect(() => {
        const handleClickOutside = (event) => {
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
            <div className="flex items-center justify-between gap-4 mb-8">
                <h1 className="text-3xl font-bold text-dark">Previous Orders</h1>
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

            {/* Table */}
            <div className="overflow-hidden">
                <div className="relative h-100">
                    <table className="w-full overflow-auto text-sm text-left rtl:text-right text-dark">
                        <thead className="text-xs text-white uppercase bg-blue">
                            <tr>
                                {role === "sales" && <th className="px-6 py-5">Customer Name</th>}
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
                                    {role === "sales" && <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{selectedUser.name}</th>}
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

            {/* Modal for selecting user */}
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
