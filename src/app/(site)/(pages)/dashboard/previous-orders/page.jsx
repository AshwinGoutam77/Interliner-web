// components/DashboardPage.jsx or app/dashboard/page.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import DataTableComponent from "@/components/DataTableComponent/page";

export default function DashboardPage() {
  const role = useSelector((state) => state.auth.role);
  const lang = useSelector((s) => s.language.lang);

  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [RepeatOrderModal, setRepeatOrderModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    remark: "",
    paymentVia: "",
    file: null,
    paymentType: "full",
  });

  const users = [
    { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
    { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
    { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
  ];
  const [selectedUser, setSelectedUser] = useState(
    role === "sales" ? users[0] : null
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRefs.current.some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const rows = [
    { id: 1, date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    { id: 2, date: "02/09/2025", number: "#2799", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    { id: 3, date: "02/09/2025", number: "#4588", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    { id: 4, date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    { id: 5, date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    { id: 5, date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
    { id: 5, date: "02/09/2025", number: "#2344", total: "$24.00", paid: "$2.00", balance: "$26.00" },
  ];

  const orderColumns = [
    ...(role === "sales"
      ? [
        {
          name: "Customer Name",
          cell: () => selectedUser.name,
        },
      ]
      : []),
    { name: "Order Date", selector: (row) => row.date, sortable: true },
    { name: "Order Number", selector: (row) => row.number, sortable: true },
    { name: "Total Amount", selector: (row) => row.total, sortable: true },
    { name: "Paid Amount", selector: (row) => row.paid, sortable: true },
    { name: "Balance Due", selector: (row) => row.balance, sortable: true },
    {
      name: "",
      cell: (row, index) => (
        <div
          ref={(el) => (dropdownRefs.current[index] = el)}
          className="relative"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="focus:outline-none z-0 flex items-center gap-2"
          >
            {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg> */}
            More Options <ChevronRight />
          </button>

          {openIndex === index && (
            <div
              className={`absolute ${lang == 'ar' ? '-right-20' : 'right-0'}  mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow z-[999999999999999]`}
            >
              <ul className="p-3 space-y-1 text-sm text-gray-700">
                <li className="py-2 px-3 hover:bg-gray">
                  <Link
                    href={{
                      pathname: "/dashboard/payment",
                      query: { tab: "pay-by-order" },
                    }}
                  >
                    Pay Due Payment
                  </Link>
                </li>
                <li className="py-2 px-3 hover:bg-gray">
                  <button
                    onClick={() => {
                      setRepeatOrderModal(true);
                      setOpenIndex(null);
                    }}
                  >
                    Repeat Order
                  </button>
                </li>
                <li className="py-2 px-3 hover:bg-gray">
                  <button>Download Receipt</button>
                </li>
                <li className="py-2 px-3 hover:bg-gray">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setOpenIndex(null);
                    }}
                  >
                    Complain
                  </button>
                </li>
                <li className="py-2 px-3 hover:bg-gray">
                  <button>Download Invoice</button>
                </li>
                <li className="py-2 px-3 hover:bg-gray">
                  <button>Support</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }

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

      <DataTableComponent columns={orderColumns} data={rows} />

      {/* Modals */}
      {RepeatOrderModal && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#0000006b]"
          onClick={() => setRepeatOrderModal(false)}
        >
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4 text-center">
              Are you sure to repeat this order?
            </h2>
            <Link href="/cart" className="mx-auto primary-btn">
              Repeat Order
            </Link>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex item-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-dark">Raise Complain</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Upload File</label>
                <input type="file" className="w-full border border-[#ccc] rounded-md text-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Select Order Number</label>
                <select
                  name="paymentVia"
                  value={form.paymentVia}
                  onChange={(e) => setForm({ ...form, paymentVia: e.target.value })}
                  className="w-full border border-[#ccc] rounded-md text-sm p-2"
                >
                  <option value="">Select</option>
                  <option value="#2233">#2233</option>
                  <option value="#224455">#224455</option>
                  <option value="#22556">#22556</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Complain</label>
                <textarea
                  name="remark"
                  value={form.remark}
                  onChange={(e) => setForm({ ...form, remark: e.target.value })}
                  placeholder="Describe your issue"
                  className="w-full border border-[#ccc] rounded-md text-sm p-2"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="primary-btn w-auto ml-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sales: Select Customer Modal */}
      {role === "sales" && isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">Select Customer</h2>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Search Customer"
              className="mb-4 rounded-md border border-gray-300 placeholder:text-dark w-full py-2.5 px-5 outline-none focus:ring-2 focus:ring-blue-200"
            />
            <ul className="space-y-3">
              {users.map((user) => (
                <li key={user.id}>
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setIsModalOpen(false);
                    }}
                    className="flex items-center justify-between gap-3 w-full text-left px-3 py-2 rounded hover:bg-gray-100"
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
            <button className="primary-btn mt-4 ml-auto" onClick={() => setIsModalOpen(false)}>
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
