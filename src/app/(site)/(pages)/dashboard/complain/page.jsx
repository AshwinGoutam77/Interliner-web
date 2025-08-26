"use client";

import { useState } from "react";

export default function Page() {
    const rows = [
        { date: "02/09/2025", number: "#2344", ticketID: "#001", status: 'Pending', description: "Lorem Ipsum&nbsp;is simply dummy text.", total: "$24.00", paid: "$2.00", balance: "$26.00" },
        { date: "02/09/2025", number: "#2345", ticketID: "#002", status: 'Resolved', description: "Lorem Ipsum&nbsp;is simply dummy text.", total: "$50.00", paid: "$20.00", balance: "$30.00" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    const [form, setForm] = useState({
        remark: "",
        paymentVia: "",
        file: null,
    });

    const [feedback, setFeedback] = useState({
        message: "",
        rating: "5",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFeedbackChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Complain Submitted:", form);
        setIsOpen(false);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback Submitted:", feedback);
        setIsFeedbackOpen(false);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-dark">Complain</h1>
                <button className="primary-btn" onClick={() => setIsOpen(true)}>Make Complain</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-dark">
                    <thead className="text-xs text-white uppercase bg-blue">
                        <tr>
                            <th className="px-6 py-5">Order Date</th>
                            <th className="px-6 py-3">Order Number</th>
                            <th className="px-6 py-3">Ticket ID</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className="bg-white border-b border-[#ccc]">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{row.date}</th>
                                <td className="px-6 py-4">{row.number}</td>
                                <td className="px-6 py-4">{row.ticketID}</td>
                                <td className="px-6 py-4">{row.status}</td>
                                <td className="px-6 py-4">
                                    <button className="secondary-btn" onClick={() => setIsFeedbackOpen(true)}>
                                        Give Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- Raise Complain Modal --- */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[9999]" onClick={() => setIsOpen(false)}>
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
                        <div className="flex item-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-dark">Raise Complain</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Upload File</label>
                                <input type="file" className="w-full border border-[#ccc] rounded-md text-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Select Order Number</label>
                                <select
                                    name="paymentVia"
                                    value={form.paymentVia}
                                    onChange={handleChange}
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                >
                                    <option value="">Select</option>
                                    <option value="cash">#2233</option>
                                    <option value="cheque">#224455</option>
                                    <option value="online">#22556</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Complain</label>
                                <textarea
                                    name="remark"
                                    value={form.remark}
                                    onChange={handleChange}
                                    placeholder="Describe your issue"
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                            <button type="submit" className="primary-btn w-auto ml-auto">Submit</button>
                        </form>
                    </div>
                </div>
            )}

            {/* --- Feedback Modal --- */}
            {isFeedbackOpen && (
                <div className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[9999]" onClick={() => setIsFeedbackOpen(false)}>
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
                        <div className="flex item-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-dark">Give Feedback</h2>
                            <button onClick={() => setIsFeedbackOpen(false)} className="text-gray-500 hover:text-black">✕</button>
                        </div>
                        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={feedback.message}
                                    onChange={handleFeedbackChange}
                                    placeholder="Write your feedback"
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Rating</label>
                                <select
                                    name="rating"
                                    value={feedback.rating}
                                    onChange={handleFeedbackChange}
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                >
                                    <option value="1">1 - Poor</option>
                                    <option value="2">2 - Fair</option>
                                    <option value="3">3 - Good</option>
                                    <option value="4">4 - Very Good</option>
                                    <option value="5">5 - Excellent</option>
                                </select>
                            </div>
                            <button type="submit" className="primary-btn w-auto ml-auto">Submit Feedback</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
