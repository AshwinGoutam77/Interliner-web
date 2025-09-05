"use client";

import DataTableComponent from "@/components/DataTableComponent/page";
import { ChevronDown, ChevronRight, Download, Mic, StopCircle, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";


export default function Page() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    const startRecording = async () => {
        if (isRecording) {
            // stop recording
            mediaRecorderRef.current?.stop();
            setIsRecording(false);
            return;
        }

        try {
            // ✅ Check available devices first
            const devices = await navigator.mediaDevices.enumerateDevices();
            const hasMic = devices.some((d) => d.kind === "audioinput");

            if (!hasMic) {
                alert("No microphone found. Please connect a mic and allow access.");
                return;
            }

            // ✅ Request mic access
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunks.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(audioChunks.current, { type: "audio/webm" });
                setAudioBlob(blob);
                setAudioURL(URL.createObjectURL(blob));
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Error accessing mic:", err);

            if (err.name === "NotAllowedError") {
                alert("Microphone access was denied. Please allow mic permissions.");
            } else if (err.name === "NotFoundError") {
                alert("No microphone device found.");
            } else {
                alert("Unexpected error accessing microphone.");
            }
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    };

    // ✅ Delete recorded file
    const deleteRecording = () => {
        if (audioURL) {
            URL.revokeObjectURL(audioURL); // free memory
        }
        setAudioURL(null);
        setAudioBlob(null);
    };

    const rows = [
        { date: "02/09/2025", number: "#2344", ticketID: "#001", status: 'Pending', description: "Lorem Ipsum&nbsp;is simply dummy text.", total: "$24.00", paid: "$2.00", balance: "$26.00" },
        { date: "02/09/2025", number: "#2345", ticketID: "#002", status: 'Resolved', description: "Lorem Ipsum&nbsp;is simply dummy text.", total: "$50.00", paid: "$20.00", balance: "$30.00" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    const role = useSelector((state) => state.auth.role);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];
    const [selectedUser, setSelectedUser] = useState(role === "sales" ? users[0] : null);

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

    const orderColumns = [
        ...(role === "sales"
            ? [
                {
                    name: "Customer Name",
                    selector: () => selectedUser.name,
                },
            ]
            : []),
        {
            name: "Complain Date",
            selector: row => row.date,
        },
        {
            name: "Ticket ID",
            selector: row => row.ticketID,
        },
        {
            name: "Order Number",
            selector: row => row.number,
        },
        {
            name: "Status",
            selector: row => row.status,
        },
        ...(role !== "sales"
            ? [
                {
                    name: "",
                    cell: () => (
                        <p
                            className="flex items-center text-blue cursor-pointer"
                            onClick={() => setIsFeedbackOpen(true)}
                        >
                            Give Feedback <ChevronRight color="#012169" />
                        </p>
                    ),
                },
            ]
            : []),
    ];


    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex items-center justify-between gap-2 mb-8">
                <h1 className="text-3xl font-bold text-dark">Complain</h1>
                <div className="flex items-center justify-between gap-2">
                    {role !== "sales" && <button className="primary-btn" onClick={() => setIsOpen(true)}>Make Complain</button>}
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

            <div className="overflow-x-auto">
                <DataTableComponent columns={orderColumns} data={rows} />
            </div>

            {/* --- Raise Complain Modal --- */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-[9999]"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex item-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-dark">Raise Complain</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Upload File */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Upload from gallery/ this device/ upload using camera
                                </label>
                                <input type="file" className="w-full border border-[#ccc] rounded-md text-sm p-2" />
                            </div>

                            {/* Select Order */}
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

                            {/* Complain Text */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium">Your Complain</label>

                                    {/* 🎤 Voice Record Button */}
                                    <button
                                        type="button"
                                        onClick={startRecording}
                                        className="text-blue"
                                    >
                                        {isRecording ? <StopCircle size={20} /> : <Mic size={20} />}
                                    </button>
                                </div>

                                <textarea
                                    name="remark"
                                    value={form.remark}
                                    onChange={handleChange}
                                    placeholder="Describe your issue"
                                    className="w-full border border-[#ccc] rounded-md text-sm p-2"
                                    rows="3"
                                ></textarea>

                                {/*  Preview Recorded Audio */}
                                {audioURL && (
                                    <div className="flex items-center justify-between mt-4 gap-5">
                                        <audio src={audioURL} controls className="w-full" />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={deleteRecording}
                                                className="text-blue rounded"
                                            >
                                                <Trash />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="primary-btn w-auto ml-auto">
                                Submit
                            </button>
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
                            <button type="submit" className="primary-btn w-auto">Submit Feedback</button>
                        </form>
                    </div>
                </div>
            )}

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
