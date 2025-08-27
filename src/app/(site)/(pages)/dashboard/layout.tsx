"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
    LayoutDashboard,
    Clock,
    MapPin,
    CreditCard,
    Banknote,
    MessageSquare,
    User,
    LogOut,
    X,
    Menu,
} from "lucide-react";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: Clock, label: "Previous Orders", href: "/dashboard/previous-orders" },
        { icon: MapPin, label: "Track Orders", href: "/dashboard/track-order" },
        { icon: CreditCard, label: "Credit Information", href: "/dashboard/credit-information" },
        { icon: Banknote, label: "Payment", href: "/dashboard/payment" },
        { icon: MessageSquare, label: "Complain", href: "/dashboard/complain" },
        { icon: User, label: "Profile", href: "/dashboard/profile" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Mobile topbar with hamburger */}
            <header className="lg:hidden fixed top-[112px] left-auto right-3 z-[99999999999999]">
                <button onClick={() => setIsOpen(true)} className="p-2 rounded-md hover:bg-blue-800 bg-blue">
                    <Menu className="h-6 w-6 text-white" />
                </button>
            </header>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-[999999999999] h-[120vh] w-64 bg-blue transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
            >
                {/* Sidebar header */}
                <div className="flex items-center justify-between p-6 border-b border-[#cccccc3b]">
                    <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden p-1 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        <X className="h-5 w-5 text-slate-400" />
                    </button>
                </div>

                {/* Menu */}
                <nav className="p-4 mt-16">
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            const active = pathname === item.href;
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={`
                      flex items-center gap-3 px-4 py-3 rounded transition-all duration-200
                      ${active
                                                ? "bg-white/20 text-white backdrop-blur-sm"
                                                : "text-white hover:text-white hover:bg-white/20"}
                    `}
                                        onClick={() => setIsOpen(false)} // close sidebar after click (mobile)
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Logout */}
                    <div className="mt-8 pt-4 border-t border-[#cccccc3b]">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
                        >
                            <LogOut className="h-5 w-5 text-white" />
                            <span className="font-medium text-white">Logout</span>
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-0 sm:p-8 mt-40 sm:mt-28 overflow-auto bg-[#fff]">{children}</main>
        </div>
    );
}
