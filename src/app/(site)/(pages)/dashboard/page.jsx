'use client'
import React from 'react'
import {
    History, MapPin, Wallet, MessageSquareWarning, Clock,
    CreditCard,
    Banknote,
    MessageSquare,
    User,
    ArrowRight
} from "lucide-react";
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

    const dashboardItems = [
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
            hoverColor: 'bg-blue', link: '/dashboard/track-order'
        },
        {
            icon: CreditCard,
            title: 'Credit Information',
            description: 'Manage payment methods',
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'bg-blue', link: '/dashboard/credit-information'
        },
        {
            icon: Banknote,
            title: 'Payment',
            description: 'Process payments',
            color: 'from-amber-500 to-amber-600',
            hoverColor: 'bg-blue', link: '/dashboard/payment'
        },
        {
            icon: MessageSquare,
            title: 'Complain',
            description: 'Submit feedback or issues',
            color: 'from-red-500 to-red-600',
            hoverColor: 'bg-blue', link: '/dashboard/complain'
        },
        {
            icon: User,
            title: 'Profile',
            description: 'Update account settings',
            color: 'from-indigo-500 to-indigo-600',
            hoverColor: 'bg-blue', link: '/dashboard/profile'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* main content */}
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-8 text-dark">Welcome User</h1>
                {/* <div className="flex flex-wrap gap-4">
                    {items.map((item, idx) => (
                        <Link
                            href={item?.link}
                            key={idx}
                            className="flex flex-col items-center justify-center p-8 bg-blue rounded-xl shadow hover:shadow-lg transition w-[230px]"
                        >
                            <div className="text-white mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        </Link>
                    ))}
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                    {dashboardItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                href={item?.link}
                                key={index}
                                className={`
                                    relative group cursor-pointer rounded-xl 
                                    bg-gradient-to-br ${item.color} ${item.hoverColor}
                                    p-6 text-white transition-all duration-500 transform
                                    hover:shadow-2xl
                                    min-h-[160px] flex flex-col justify-between
                                    `}
                            >
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
                            </Link>
                        );
                    })}
                </div>

            </main>
        </div>
    )
}
