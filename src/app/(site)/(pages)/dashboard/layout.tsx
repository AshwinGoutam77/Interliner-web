"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    const navItems = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/previous-orders", label: "Previous Orders" },
        { href: "/dashboard/track-order", label: "Track Orders" },
        { href: "/dashboard/credit-information", label: "Credit Information" },
        { href: "/dashboard/payment", label: "Payment" },
        { href: "/dashboard/complain", label: "Complain" },
        { href: "/dashboard/edit-profile", label: "Edit Profile" },
        { href: "/", label: "Logout" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100 mt-27 border-t border-[#cccccc61]">
            {/* Sidebar */}
            <aside className="w-64 bg-blue py-6">
                <h2 className="text-2xl font-bold text-white mb-6 px-6">Dashboard</h2>
                <nav className="">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-6 py-3 transition ${isActive
                                    ? "bg-white text-blue font-semibold"
                                    : "text-white hover:bg-white hover:text-blue"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
