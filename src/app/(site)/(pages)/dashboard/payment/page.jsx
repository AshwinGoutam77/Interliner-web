"use client";
import React, { useState } from "react";

export default function Page() {
    const [activeTab, setActiveTab] = useState("payment-records");
    const [isOpen, setIsOpen] = useState(false);

    const [form, setForm] = useState({
        amount: "",
        remark: "",
        paymentVia: "",
        file: null,
        paymentType: 'full'
    });

    const tabs = [
        { id: "payment-records", label: "Payment Records" },
        { id: "pay-by-order", label: "Pay by Order" },
        { id: "make-payment", label: "Make Payment" },
    ];

    // Dummy data for payment records
    const payments = [
        { id: 1, title: "Paid directly", date: "2025-08-25 10:30 AM", amount: "$120", method: "Cash" },
        { id: 2, title: "Partial Payment", date: "2025-08-20 03:15 PM", amount: "$250", method: "Cheque" },
        { id: 3, title: "Full Payment", date: "2025-08-18 05:45 PM", amount: "$75", method: "Cash" },
        { id: 4, title: "Paid directly", date: "2025-08-25 10:30 AM", amount: "$120", method: "Card" },
        { id: 5, title: "Partial Payment", date: "2025-08-20 03:15 PM", amount: "$250", method: "Cheque" },
        { id: 6, title: "Full Payment", date: "2025-08-18 05:45 PM", amount: "$75", method: "Card" },
    ];

    const rows = [
        { date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$22.00" },
        { date: "02/09/2025", number: "#3434", total: "$50.00", paid: "$20.00", balance: "$30.00" },
    ];

    const paymentRows = [
        { date: "2025-08-25 10:30 AM", method: "Paid directly", total: "$120", paidVia: "Via Cash" },
        { date: "2025-08-25 10:30 AM", method: "Paid directly", total: "$120", paidVia: "Via Cash" },
        { date: "2025-08-25 10:30 AM", method: "Paid directly", total: "$120", paidVia: "Via Cash" },
        { date: "2025-08-25 10:30 AM", method: "Paid directly", total: "$120", paidVia: "Via Cash" },
        { date: "2025-08-25 10:30 AM", method: "Paid directly", total: "$120", paidVia: "Via Cash" },
        { date: "2025-08-25 10:30 AM", method: "Paid directly", total: "$120", paidVia: "Via Cash" },
    ];

    const handleFileChange = (e) => {
        setForm({ ...form, file: e.target.files[0] });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment Data Submitted:", form);
        setIsOpen(false);
    };

    return (
        <>
            {/* Tab Buttons */}
            <div className="mb-4 border-b border-[#ccc] dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
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
                        {tab.id === "payment-records" ? (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <table className="w-full text-sm text-left rtl:text-right text-dark">
                                        <thead className="text-xs text-white uppercase bg-blue">
                                            <tr>
                                                <th className="px-6 py-5">Payment Method</th>
                                                <th className="px-6 py-3">Date</th>
                                                <th className="px-6 py-3">Amount</th>
                                                <th className="px-6 py-3">Paid Via</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paymentRows.map((row, i) => (
                                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-[#ccc]">
                                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.date}</th>
                                                    <td className="px-6 py-4">{row.method}</td>
                                                    <td className="px-6 py-4">{row.total}</td>
                                                    <td className="px-6 py-4">{row.paidVia}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : tab.id === "pay-by-order" ? (
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
                                                    <td className="px-6 py-4 relative overflow-visible">
                                                        <button
                                                            onClick={() => setIsOpen(true)}
                                                            className="bg-blue text-white px-3 py-2 rounded-md text-xs hover:bg-blue/90"
                                                        >
                                                            Pay Now
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) :
                            <div
                                className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[999999999]"
                                onClick={() => setActiveTab("pay-by-order")}
                            >
                                <div
                                    className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h2 className="text-lg font-semibold mb-4 text-dark">Make Payment</h2>
                                    <h2 className="text-lg font-semibold mb-4 text-dark">Payment Due: $230</h2>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Select Payment Via */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Payment Via
                                            </label>
                                            <select
                                                name="paymentVia"
                                                value={form.paymentVia}
                                                onChange={handleChange}
                                                className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                            >
                                                <option value="">Select</option>
                                                <option value="cash">Cash</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online</option>
                                            </select>
                                        </div>

                                        {/* Full / Part Payment Tabs */}
                                        <div>
                                            <div className="flex gap-2 mb-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setForm({ ...form, paymentType: "full" })}
                                                    className={`px-4 py-2 text-sm rounded-md border ${form.paymentType === "full"
                                                        ? "bg-blue text-white"
                                                        : "bg-white text-dark"
                                                        }`}
                                                >
                                                    Full Payment
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setForm({ ...form, paymentType: "part" })}
                                                    className={`px-4 py-2 text-sm rounded-md border ${form.paymentType === "part"
                                                        ? "bg-blue text-white"
                                                        : "bg-white text-dark"
                                                        }`}
                                                >
                                                    Part Payment
                                                </button>
                                            </div>

                                            {form.paymentType === "full" && (
                                                <p className="text-green-600 text-sm font-medium">
                                                    You will receive <strong className="text-green">10% credit</strong> on making a full payment!
                                                </p>
                                            )}

                                            {form.paymentType === "part" && (
                                                <div className="mt-2">
                                                    <label className="block text-sm font-medium mb-1">Part Payment Amount</label>
                                                    <input
                                                        type="number"
                                                        name="partAmount"
                                                        value={form.partAmount || ""}
                                                        onChange={handleChange}
                                                        placeholder="Enter part amount"
                                                        className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Amount */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Amount</label>
                                            <input
                                                type="number"
                                                name="amount"
                                                value={form.amount}
                                                onChange={handleChange}
                                                placeholder="Enter amount"
                                                className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                                required
                                            />
                                        </div>

                                        {/* Remark */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Remark</label>
                                            <textarea
                                                name="remark"
                                                value={form.remark}
                                                onChange={handleChange}
                                                placeholder="Enter remark"
                                                className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>

                                        {/* Submit */}
                                        <button type="submit" className="primary-btn w-full">
                                            Submit Payment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[999999999]" onClick={() => setIsOpen(false)}>
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
                        <div className="flex item-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-dark">Make Payment</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Select Payment Via */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Payment Via
                                </label>
                                <select
                                    name="paymentVia"
                                    value={form.paymentVia}
                                    onChange={handleChange}
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                >
                                    <option value="">Select</option>
                                    <option value="cash">Cash</option>
                                    <option value="cheque">Cheque</option>
                                    <option value="online">Online</option>
                                </select>
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={form.amount}
                                    onChange={handleChange}
                                    placeholder="Enter amount"
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                    required
                                />
                            </div>

                            {/* Remark */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Remark</label>
                                <textarea
                                    name="remark"
                                    value={form.remark}
                                    onChange={handleChange}
                                    placeholder="Enter remark"
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                    rows="3"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="primary-btn w-auto"
                            >
                                Submit Payment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
