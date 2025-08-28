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
                        name="firstName"
                        id="firstName"
                        placeholder="Jhon Doe"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="firstName"
                        id="firstName"
                        placeholder="jhon@gmail.com"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="firstName"
                        id="firstName"
                        placeholder="xxxxxxxx"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        name="firstName"
                        id="firstName"
                        placeholder="*******"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <textarea
                        name="notes"
                        id="notes"
                        rows={2}
                        placeholder="Enter your address"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
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
