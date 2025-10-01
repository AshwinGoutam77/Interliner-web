"use client";
import { ProfileTranslations } from "@/data";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const lang = useSelector((state) => state.language.lang);
    const t = ProfileTranslations[lang] || ProfileTranslations.en;

    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="w-full p-6" dir={lang === "ar" ? "rtl" : "ltr"}>
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8 text-dark">{t.pageTitle}</h1>

            {/* Profile Image Section */}
            <div className="flex items-center gap-6 mb-10 border-b border-[#ccc9] pb-6">
                <div className="relative">
                    <img
                        src={profileImage || "../../../../images/users/user-04.jpg"}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover border-2 border-blue"
                    />
                    <label
                        htmlFor="profile-upload"
                        className="absolute bottom-0 right-0 bg-blue text-white text-xs px-3 py-1 rounded-full cursor-pointer shadow-md"
                    >
                        {t.changePhoto}
                    </label>
                    <input
                        type="file"
                        id="profile-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
                <div className={lang === "ar" ? "text-right" : ""}>
                    <h3 className="text-xl font-semibold text-dark">User</h3>
                    <p className="text-gray-600">user@gmail.com</p>
                </div>
            </div>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t.name}</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder={t.namePlaceholder}
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t.email}</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={t.emailPlaceholder}
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t.phone}</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder={t.phonePlaceholder}
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t.password}</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder={t.passwordPlaceholder}
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-1">{t.address}</label>
                    <textarea
                        name="address"
                        id="address"
                        rows={2}
                        placeholder={t.addressPlaceholder}
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    ></textarea>
                </div>
            </form>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
                <button type="submit" className="primary-btn">{t.saveChanges}</button>
            </div>
        </div>
    );
}
