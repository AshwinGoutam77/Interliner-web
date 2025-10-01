"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTableComponent from "../../../../../components/DataTableComponent/page"
import { PaymentTranslations } from "@/data";

export default function Page() {
    const searchParams = useSearchParams();
    const tabFromUrl = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState("payment-records");
    const lang = useSelector((state) => state.language.lang);
    const t = PaymentTranslations[lang] || PaymentTranslations.en;

    useEffect(() => {
        if (tabFromUrl) {
            setActiveTab(tabFromUrl);
        }
    }, [tabFromUrl]);

    const [isOpen, setIsOpen] = useState(false);
    const role = useSelector((state) => state.auth.role);
    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];
    const [selectedUser, setSelectedUser] = useState(role === "sales" ? users[0] : null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [form, setForm] = useState({
        amount: "",
        remark: "",
        paymentVia: "",
        file: null,
        paymentType: 'full'
    });

    const tabs = [
        { id: "payment-records", label: t.tabs.paymentRecords, sales: true, user: true },
        { id: "pay-by-order", label: t.tabs.payByOrder, sales: true, user: true },
        { id: "make-payment", label: t.tabs.makePayment, sales: false, user: true },
        { id: "credit-info", label: t.tabs.creditInfo, sales: true, user: false },
    ];


    const usersCreditData = [
        {
            id: 1,
            data: [
                { label: "Customer Name", value: "John Doe" },
                { label: "Amount Paid", value: "$20" },
                { label: "Amount Due", value: "$10" },
            ],
        },
        {
            id: 2,
            data: [
                { label: "Customer Name", value: "Jane Smith" },
                { label: "Amount Paid", value: "$50" },
                { label: "Amount Due", value: "$0" },
            ],
        },
        {
            id: 3,
            data: [
                { label: "Customer Name", value: "Mike Johnson" },
                { label: "Amount Paid", value: "$35" },
                { label: "Amount Due", value: "$5" },
            ],
        },
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


    const paymentColumns = [
        ...(role === "sales" ? [{ name: t.table.customerName, selector: () => selectedUser.name }] : []),
        { name: t.table.date, selector: row => row.date },
        { name: t.table.paymentMethod, selector: row => row.method },
        { name: t.table.amount, selector: row => row.total },
        { name: t.table.paidVia, selector: row => row.paidVia },
    ];

    const orderColumns = [
        ...(role === "sales" ? [{ name: t.table.customerName, selector: () => selectedUser.name }] : []),
        { name: t.table.orderDate, selector: row => row.date },
        { name: t.table.orderNumber, selector: row => row.number },
        { name: t.table.totalAmount, selector: row => row.total },
        { name: t.table.paidAmount, selector: row => row.paid },
        { name: t.table.balanceDue, selector: row => row.balance },
        ...(role !== "sales"
            ? [{ name: "", cell: () => <p onClick={() => setIsOpen(true)} className="flex items-center text-blue">{t.table.payNow} <ChevronRight color="#012169" /></p> }]
            : []),
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

            {/* Tab Buttons */}
            <div className="mb-4 sm:mt-20 lg:mt-0 md:mt-10">
                <div className="flex items-center justify-between">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center border-b border-[#ccc]">
                        {tabs.map((tab) => (
                            ((role === "user" && tab.user) || (role === "sales" && tab.sales)) &&
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
                                    <DataTableComponent
                                        columns={paymentColumns}
                                        data={paymentRows}
                                        title=""
                                    />
                                </div>
                            </div>
                        ) : tab.id === "pay-by-order" ? (
                            <div className="overflow-x-auto overflow-visible">
                                <div className="relative overflow-x-auto overflow-visible h-100">
                                    <DataTableComponent
                                        columns={orderColumns}
                                        data={rows}
                                        title=""
                                    />
                                </div>
                            </div>
                        ) : tab.id === "make-payment" ?
                            <div
                                className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[999999999]"
                                onClick={() => setActiveTab("pay-by-order")}
                            >
                                <div
                                    className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-semibold text-dark">{t.modal.makePayment}</h2>
                                        <button onClick={() => setActiveTab("pay-by-order")} className="text-gray-500 hover:text-black">
                                            ✕
                                        </button>
                                    </div>

                                    {/* Payment Due */}
                                    <h2 className="text-lg font-semibold mb-4 text-dark">
                                        {lang === "ar" ? "المبلغ المستحق" : "Payment Due"}: $230
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Payment Via */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1">{t.modal.paymentVia}</label>
                                            <select
                                                name="paymentVia"
                                                value={form.paymentVia}
                                                onChange={handleChange}
                                                className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                            >
                                                <option value="">{lang === "ar" ? "اختر" : "Select"}</option>
                                                <option value="cash">{lang === "ar" ? "نقدا" : "Cash"}</option>
                                                <option value="cheque">{lang === "ar" ? "شيك" : "Cheque"}</option>
                                                <option value="online">{lang === "ar" ? "عبر الإنترنت" : "Online"}</option>
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
                                                    {lang === "ar" ? "الدفع الكامل" : "Full Payment"}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setForm({ ...form, paymentType: "part" })}
                                                    className={`px-4 py-2 text-sm rounded-md border ${form.paymentType === "part"
                                                        ? "bg-blue text-white"
                                                        : "bg-white text-dark"
                                                        }`}
                                                >
                                                    {lang === "ar" ? "الدفع الجزئي" : "Part Payment"}
                                                </button>
                                            </div>

                                            {form.paymentType === "full" && (
                                                <p className="text-green-600 text-sm font-medium">
                                                    {lang === "ar"
                                                        ? "ستحصل على رصيد 10٪ عند الدفع الكامل!"
                                                        : "You will receive 10% credit on making a full payment!"}
                                                </p>
                                            )}

                                            {form.paymentType === "part" && (
                                                <div className="mt-2">
                                                    <label className="block text-sm font-medium mb-1">
                                                        {lang === "ar" ? "المبلغ الجزئي" : "Part Payment Amount"}
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="partAmount"
                                                        value={form.partAmount || ""}
                                                        onChange={handleChange}
                                                        placeholder={lang === "ar" ? "أدخل المبلغ الجزئي" : "Enter part amount"}
                                                        className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Remark */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                {lang === "ar" ? "ملاحظة" : "Remark"}
                                            </label>
                                            <textarea
                                                name="remark"
                                                value={form.remark}
                                                onChange={handleChange}
                                                placeholder={lang === "ar" ? "أدخل ملاحظة" : "Enter remark"}
                                                className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>

                                        {/* Submit */}
                                        <button type="submit" className="primary-btn">
                                            {lang === "ar" ? "إرسال الدفع" : "Submit Payment"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className="space-y-6">
                                {usersCreditData.map((user) => (
                                    <div
                                        key={user.id}
                                        className="bg-white rounded-2xl border border-[#ccc9] p-6"
                                    >
                                        <div className="space-y-4">
                                            {user.data.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center justify-between border-b border-[#ccc9] last:border-none pb-3 last:pb-0"
                                                >
                                                    <span className="text-gray-600 font-medium">{item.label}</span>
                                                    <span className="text-gray-900 font-semibold">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
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
                            <h2 className="text-lg font-semibold text-dark">{t.modal.makePayment}</h2>
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
                                    {t.modal.paymentVia}
                                </label>
                                <select
                                    name="paymentVia"
                                    value={form.paymentVia}
                                    onChange={handleChange}
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                >
                                    <option value="cash">{lang === "ar" ? "نقدا" : "Cash"}</option>
                                    <option value="cheque">{lang === "ar" ? "شيك" : "Cheque"}</option>
                                    <option value="online">{lang === "ar" ? "عبر الإنترنت" : "Online"}</option>
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
