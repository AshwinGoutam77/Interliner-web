"use client";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100 mt-27 border-t border-[#cccccc61]">
            {/* Sidebar */}
            <aside className="w-64 bg-blue py-6">
                <h2 className="text-2xl font-bold text-white mb-6 px-6">Dashboard</h2>
                <nav className="space-y-4">
                    <Link href="/dashboard" className="block text-white hover:text-blue-600 px-6">Dashboard</Link>
                    <Link href="/dashboard/previous-orders" className="block text-white hover:text-blue-600 px-6">Previous Orders</Link>
                    <Link href="/dashboard/track-order" className="block text-white hover:text-blue-600 px-6">Track Orders</Link>
                    <Link href="/dashboard/credit-information" className="block text-white hover:text-blue-600 px-6">Credit Information</Link>
                    <Link href="/dashboard/payment" className="block text-white hover:text-blue-600 px-6">Payment</Link>
                    <Link href="/dashboard/complain" className="block text-white hover:text-blue-600 px-6">Complain</Link>
                    <Link href="/dashboard/complain" className="block text-white hover:text-blue-600 px-6">Edit Profile</Link>
                    <Link href="/" className="block text-white hover:text-blue-600 px-6">Logout</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
