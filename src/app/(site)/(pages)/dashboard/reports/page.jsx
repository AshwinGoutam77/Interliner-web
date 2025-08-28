'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Page() {
    const tabs = [
        { id: "customer-outstanding", label: "Customer Outstanding" },
        { id: "follow-up-customer", label: "Follow Up Customer" },
        { id: "due-for-payment", label: "Due for Payment" },
        { id: "inactive-customer", label: "Inactive Customer" },
        { id: "sales-summary", label: "Sales Summary" },
    ];
    const [activeTab, setActiveTab] = useState("customer-outstanding");
    const role = useSelector((state) => state.auth.role);
    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];
    const [selectedUser, setSelectedUser] = useState(role === "sales" ? users[0] : null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="mb-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center border-b border-[#ccc]">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="me-2" role="presentation">
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`inline-block p-4 rounded-t-lg
                                    ${activeTab === tab.id
                                        ? "text-dark border-dark dark:text-white dark:border-white border-b-2"
                                        : "text-gray-500 border-gray-100 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:border-gray-700 dark:hover:text-gray-300"
                                    }`}
                                type="button"
                                role="tab"
                                aria-controls={tab.id}
                                aria-selected={activeTab === tab.id}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === tab.id ? "block" : "hidden"
                            }`}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                    >
                        {tab.id === "customer-outstanding" ? (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <h2 className="text-lg font-semibold mb-2 text-blue">Customer Outstanding</h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Here you can see the list of customers with outstanding balances.
                                    </p>
                                </div>
                            </div>
                        ) : tab.id === "follow-up-customer" ? (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <h2 className="text-lg font-semibold mb-2 text-blue">Follow Up Customers</h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Track customers who require follow-ups for payments or queries.
                                    </p>
                                </div>
                            </div>
                        ) : tab.id === "due-for-payment" ? (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <h2 className="text-lg font-semibold mb-2 text-blue">Due for Payment</h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Customers whose payments are due will be listed here.
                                    </p>
                                </div>
                            </div>
                        ) : tab.id === "inactive-customer" ? (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <h2 className="text-lg font-semibold mb-2 text-blue">Inactive Customers</h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Customers who haven’t made transactions recently appear here.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <h2 className="text-lg font-semibold mb-2 text-blue">Sales Summary</h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Sales summary will appers here. 
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
