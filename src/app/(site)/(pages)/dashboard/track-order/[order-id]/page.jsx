'use client';

import { useState, useEffect } from 'react';
import { Check, Package, Truck, Home, Clock, MapPin, Phone, Mail, Star, Shield, RefreshCw, Calendar, User, CreditCard, Gift } from 'lucide-react';
import { useSelector } from 'react-redux';
import { TrackOrderTranslations } from '@/data';

const trackingSteps = [
    {
        id: 'placed',
        title: 'Order Placed',
        description: 'Your order has been confirmed and is being processed',
        date: 'Aug 22, 2025',
        time: '10:30 AM',
        status: 'completed',
        icon: Package,
        location: 'Mumbai, India'
    },
    {
        id: 'packed',
        title: 'Order Packed',
        description: 'Items have been carefully packed and ready for shipment',
        date: 'Aug 23, 2025',
        time: '2:15 PM',
        status: 'completed',
        icon: Package,
        location: 'Mumbai Warehouse'
    },
    {
        id: 'shipped',
        title: 'Shipped',
        description: 'Package is on its way to the delivery hub',
        date: 'Aug 24, 2025',
        time: '8:45 AM',
        status: 'completed',
        icon: Truck,
        location: 'Delhi Hub'
    },
    {
        id: 'delivery',
        title: 'Out for Delivery',
        description: 'Your package is with our delivery partner',
        date: 'Aug 26, 2025',
        time: '9:00 AM',
        status: 'current',
        icon: Truck,
        location: 'Local Delivery Center'
    },
    {
        id: 'delivered',
        title: 'Delivered',
        description: 'Package will be delivered to your doorstep',
        date: 'Expected Today',
        time: 'By 6:00 PM',
        status: 'pending',
        icon: Home,
        location: 'Your Address'
    }
];

const orderItems = [
    {
        id: 1,
        name: 'Waist Band',
        brand: 'Apple',
        quantity: 1,
        price: 24900,
        originalPrice: 27900,
        image: 'https://interliners.net/wp-content/uploads/2021/03/Waist-band-247x296.jpg',
        rating: 4.8,
        warranty: '1 Year Apple Warranty'
    },
    {
        id: 2,
        name: 'Perforated Tapes',
        brand: 'Apple',
        quantity: 1,
        price: 41900,
        originalPrice: 45900,
        image: 'https://interliners.net/wp-content/uploads/2021/03/Interlining-Tape-Perforated-for-The-Waistband-247x296.jpg',
        rating: 4.9,
        warranty: '1 Year Apple Warranty'
    }
];

const deliveryPartner = {
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    rating: 4.7,
    deliveries: 2847,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
};

export default function TrackOrder() {
    const role = useSelector((state) => state.auth.role);
    const [hoveredStep, setHoveredStep] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const lang = useSelector((state) => state.language.lang);
    const t = TrackOrderTranslations[lang] || TrackOrderTranslations.en;

    const getStepStyles = (status) => {
        switch (status) {
            case 'completed':
                return {
                    circle: 'bg-blue',
                    line: 'bg-dark',
                    text: 'text-gray-900',
                    date: 'text-green-600',
                    card: 'bg-green-50 border-[#fff]'
                };
            case 'current':
                return {
                    circle: 'bg-gray-100 border-gray-300 text-gray-400',
                    line: 'bg-gray',
                    text: 'text-blue-600 font-semibold',
                    date: 'text-blue-500',
                    card: 'bg-green-50 border-[#fff]'
                };
            default:
                return {
                    circle: 'bg-gray-100 border-gray-300 text-gray-400',
                    line: 'bg-gray-200',
                    text: 'text-gray-400',
                    date: 'text-gray-400',
                    card: 'bg-green-50 border-[#fff]'
                };
        }
    };

    const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalSavings = orderItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="relative z-10">
                <div className="mx-auto">
                    {/* Header Section */}
                    <div className="">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div>
                                        <h1 className="text-3xl font-bold text-dark">{t.pageTitle}</h1>
                                        <p className="text-gray-600 mt-1">{t.pageSubtitle}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                                        <span className="font-semibold text-blue-800">{t.orderId}</span>
                                        <span className="text-blue-900 font-mono">#ORD-88</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                        <Calendar className="w-4 h-4 text-green-600" />
                                        <span className="text-green-800">{t.placedOn} Aug 22, 2025</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 lg:mt-0">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white">
                                    <div className="text-center">
                                        <p className="text-blue-100 text-sm">{t.estimatedDelivery}</p>
                                        <p className="text-2xl font-bold">Today</p>
                                        <p className="text-blue-100">{t.by} 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="border border-[#ccc] rounded-lg p-8">
                                <div className='flex items-center justify-between gap-4 mb-8 '>
                                    <h2 className="text-xl font-bold text-dark flex items-center gap-3">
                                        {t.orderJourney}
                                    </h2>
                                    {role !== "sales" && <div className='flex items-center gap-4'>
                                        <button className='primary-btn'>{t.markReceived}</button>
                                        <button className='primary-btn'>{t.downloadInvoice}</button>
                                    </div>}
                                </div>
                                <div className="relative">
                                    {trackingSteps.map((step, index) => {
                                        const styles = getStepStyles(step.status);
                                        const Icon = step.icon;
                                        const isLast = index === trackingSteps.length - 1;
                                        const isHovered = hoveredStep === step.id;

                                        return (
                                            <div
                                                key={step.id}
                                                className="relative flex gap-6 pb-8"
                                                onMouseEnter={() => setHoveredStep(step.id)}
                                                onMouseLeave={() => setHoveredStep(null)}
                                            >
                                                {/* Connection Line */}
                                                {!isLast && (
                                                    <div className="absolute left-6 top-16 w-0.5 h-20 transition-all duration-500">
                                                        <div className={`w-full h-full ${styles.line} rounded-full`}></div>
                                                    </div>
                                                )}

                                                {/* Step Circle */}
                                                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 ${styles.circle}`}>
                                                    {step.status === 'completed' ? (
                                                        <Check className="w-6 h-6 text-white" />
                                                    ) : step.status === 'current' ? (
                                                        <Clock className="w-5 h-5 text-dark" />
                                                    ) : (
                                                        <Icon className="w-5 h-5 text-dark" />
                                                    )}
                                                </div>

                                                {/* Step Content */}
                                                <div className={`flex-1 p-3 rounded-2xl border ${styles.card}`}>
                                                    <div className="flex justify-between items-start mb-0">
                                                        <h3 className={`text-md font-semibold transition-colors duration-300 ${styles.text}`}>
                                                            {step.title}
                                                        </h3>
                                                        <div className="text-right">
                                                            <p className={`text-xs font-medium ${styles.date}`}>
                                                                {step.date}
                                                            </p>
                                                            <p className="text-xs text-gray-500">{step.time}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 mb-3 text-sm">{step.description}</p>
                                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{step.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Order Items Sidebar */}
                        <div className="space-y-8">
                            <div className="border border-[#ccc] rounded-lg p-8">
                                <h2 className="text-xl font-bold text-dark mb-6">{t.orderedItems}</h2>

                                <div className="flex flex-col gap-2">
                                    {orderItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border-b border-[#ccc9] py-2 cursor-pointer"
                                            onMouseEnter={() => setHoveredItem(item.id)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <div className="flex flex-row flex-wrap gap-4 mb-2">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-xl border-2 border-white shadow-md"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-dark mb-1">{item.name}</h3>
                                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                                        <span className="text-sm text-dark">Off White | Cut - 10 rolls | UnCut -  <br />2 rolls |36 Inch | 25 Meter</span>
                                                        <div className="text-right">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-lg font-bold text-dark">
                                                                    ₹{item.price.toLocaleString()}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>


                                {/* Order Summary */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-dark">{t.subtotal}</span>
                                        <span className="font-semibold text-dark">₹20,000</span>
                                    </div>
                                    <div className="flex justify-between items-center text-green-600">
                                        <span className="text-dark">{t.saved}</span>
                                        <span className="font-semibold">₹2,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-dark">{t.gst}</span>
                                        <span className="font-semibold text-dark">$24</span>
                                    </div>
                                    <div className="border-t border-[#ccc9] pt-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-dark">{t.totalPaid}</span>
                                            <span className="text-2xl font-bold text-dark">₹18,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Info */}
                                <div className="border-t border-[#ccc9] pt-6 mt-6">
                                    <h2 className="text-xl font-bold text-dark mb-4">{t.paymentDetails}</h2>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">{t.paymentMethod}</span>
                                            <span className="font-medium text-gray-900">Credit Card</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">{t.cardEnding}</span>
                                            <span className="font-medium text-gray-900">****4242</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">{t.transactionId}</span>
                                            <span className="font-mono text-sm text-gray-900">TXN123456789</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}