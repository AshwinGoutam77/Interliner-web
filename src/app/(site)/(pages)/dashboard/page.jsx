'use client'
import React, { useState } from 'react'
import {
    MapPin, Clock, CreditCard, Banknote, MessageSquare, ArrowRight, BarChart3, Box, ChevronRight
} from "lucide-react";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Page() {
    const role = useSelector((state) => state.auth.role);
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: 1, name: "John Doe", img: "../../../../images/users/user-04.jpg" },
        { id: 2, name: "Jane Smith", img: "../../../../images/users/user-04.jpg" },
        { id: 3, name: "David Johnson", img: "../../../../images/users/user-04.jpg" },
    ];

    const handleStartNewOrder = () => {
        if (role === "sales") {
            setIsModalOpen(true);
        } else {
            router.push("/shop");
        }
    };

    const dashboardItems = [
        {
            icon: Box,
            title: 'Start New Order',
            description: 'Place new order',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'bg-blue',
            onClick: handleStartNewOrder
        },
        {
            icon: Clock,
            title: 'Previous Orders',
            description: 'View your order history',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'bg-blue',
            link: '/dashboard/previous-orders'
        },
        {
            icon: MapPin,
            title: 'Track Orders',
            description: 'Monitor shipment status',
            color: 'from-emerald-500 to-emerald-600',
            hoverColor: 'bg-blue',
            link: '/dashboard/track-order'
        },
        role === "sales"
            ? {
                icon: BarChart3,
                title: 'Reports',
                description: 'View sales reports',
                color: 'from-pink-500 to-pink-600',
                hoverColor: 'bg-blue',
                link: '/dashboard/reports'
            }
            : {
                icon: CreditCard,
                title: 'Credit Information',
                description: 'Manage payment methods',
                color: 'from-purple-500 to-purple-600',
                hoverColor: 'bg-blue',
                link: '/dashboard/credit-information'
            },
        {
            icon: Banknote,
            title: 'Payment',
            description: 'Process payments',
            color: 'from-amber-500 to-amber-600',
            hoverColor: 'bg-blue',
            link: '/dashboard/payment'
        },
        {
            icon: MessageSquare,
            title: 'Complain',
            description: 'Submit feedback or issues',
            color: 'from-red-500 to-red-600',
            hoverColor: 'bg-blue',
            link: '/dashboard/complain'
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-8 text-dark">
                    Welcome {role === "sales" ? "Sales Team" : "User"}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                    {dashboardItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                onClick={item.onClick ? item.onClick : undefined}
                                className={`
                  relative group cursor-pointer rounded-xl 
                  bg-gradient-to-br ${item.color} ${item.hoverColor}
                  p-6 text-white transition-all duration-500 transform
                  hover:shadow-2xl min-h-[160px] flex flex-col justify-between
                `}
                            >
                                {item.link && !item.onClick ? (
                                    <Link href={item.link} className="absolute inset-0 z-10" />
                                ) : null}

                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Customer Select Modal */}
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
                                            router.push(`/shop?customerId=${user.id}`);
                                        }}
                                        className="flex items-center justify-between gap-3 w-full text-left px-3 py-2 rounded hover:bg-gray/40 rounded-md"
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
    )
}
