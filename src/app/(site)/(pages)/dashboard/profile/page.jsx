"use client";
import { useState } from "react";

export default function ProfilePage() {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="w-full p-6">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8 text-dark">Profile</h1>

            {/* Profile Image Section */}
            <div className="flex items-center gap-6 mb-10 border-b border-[#ccc9] pb-6">
                <div className="relative">
                    <img
                        src={
                            profileImage ||
                            "../../../../images/users/user-04.jpg"
                        }
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover border-2 border-blue"
                    />
                    <label
                        htmlFor="profile-upload"
                        className="absolute bottom-0 right-0 bg-blue text-white text-xs px-3 py-1 rounded-full cursor-pointer shadow-md"
                    >
                        Change
                    </label>
                    <input
                        type="file"
                        id="profile-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-dark">User</h3>
                    <p className="text-gray-600">user@gmail.com</p>
                </div>
            </div>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-[#ccc] rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-[#ccc] rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="xxxxxxxxx"
                        className="w-full border border-[#ccc] rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full border border-[#ccc] rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <textarea
                        rows="3"
                        placeholder="Enter your address"
                        className="w-full border border-[#ccc] rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                    ></textarea>
                </div>
            </form>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
                <button
                    type="submit"
                    className="primary-btn"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
