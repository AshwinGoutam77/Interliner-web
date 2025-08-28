'use client'
import React from 'react'
import {
    MapPin, Clock, CreditCard, Banknote, MessageSquare, User, ArrowRight, BarChart3
} from "lucide-react";
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Page() {
    const role = useSelector((state) => state.auth.role);

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
        {
            icon: User,
            title: 'Profile',
            description: 'Update account settings',
            color: 'from-indigo-500 to-indigo-600',
            hoverColor: 'bg-blue',
            link: '/dashboard/profile'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* main content */}
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-8 text-dark">
                    Welcome {role === "sales" ? "Sales Team" : "User"}
                </h1>
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
