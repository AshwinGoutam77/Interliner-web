'use client'
import React from 'react'
import { History, MapPin, CreditCard, Wallet, MessageSquareWarning, User } from "lucide-react";
import Link from 'next/link';

export default function Page() {
    const items = [
        { icon: <History size={32} />, title: "Previous Orders", link: '/dashboard/previous-orders' },
        { icon: <MapPin size={32} />, title: "Track Orders", link: '/dashboard/track-order' },
        { icon: <CreditCard size={32} />, title: "Credit Information", link: '/dashboard/credit-information' },
        { icon: <Wallet size={32} />, title: "Payment", link: '/dashboard/payment' },
        { icon: <MessageSquareWarning size={32} />, title: "Complain", link: '/dashboard/complain' },
        { icon: <User size={32} />, title: "Profile", link: '/' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* main content */}
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-8 text-dark">Welcome User</h1>
                <div className="flex flex-wrap gap-4">
                    {items.map((item, idx) => (
                        <Link
                            href={item?.link}
                            key={idx}
                            className="flex flex-col items-center justify-center p-6 bg-blue rounded-2xl shadow hover:shadow-lg transition w-[230px]"
                        >
                            <div className="text-white mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}
