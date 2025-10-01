"use client";
import { SignupTranslations } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import API from "../../../services/api";

type FormValues = {
  name?: string;
  companyName?: string;
  contactName?: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  trn?: string;
};

const Signup = () => {
  const lang = useSelector((state: any) => state.language.lang); // redux language
  const t = SignupTranslations[lang] || SignupTranslations.en;

  const [activeTab, setActiveTab] = useState<"individual" | "company">("individual");
  const [formValues, setFormValues] = useState<FormValues>({
    phone: "",
    email: "",
    password: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};

    if (activeTab === "individual") {
      if (!formValues.name) newErrors.name = `${t.fullName} is required`;
    } else {
      if (!formValues.companyName) newErrors.companyName = `${t.companyName} is required`;
      if (!formValues.contactName) newErrors.contactName = `${t.contactName} is required`;
      if (!formValues.trn) newErrors.trn = `${t.trn} is required`;
    }

    if (!formValues.phone) newErrors.phone = `${t.phone} is required`;
    else if (!/^[0-9]{10,15}$/.test(formValues.phone)) newErrors.phone = "Invalid phone number";

    if (!formValues.email) newErrors.email = `${t.email} is required`;
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = "Invalid email format";

    if (!formValues.password) newErrors.password = `${t.password} is required`;
    else if (formValues.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!formValues.address) newErrors.address = `${t.address} is required`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    let payload: any = {
      name: formValues.name || "",
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      password: formValues.password,
    };

    if (activeTab === "company") {
      payload.company_name = formValues.companyName || "";
      payload.trn_number = formValues.trn || "";
    }

    try {
      const response = await API.createCustomer(payload);
      console.log("✅ Customer created successfully:", response.data);
    } catch (error) {
      console.error("❌ API error:", error.response?.data || error.message);
    }
  };

  return (
    <section className="overflow-hidden py-20 bg-[#f3f4f62e] mt-40" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-[url('/images/banner/login-banner-new.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-6">
            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
              {t.createAccount}
            </h2>
            <p>{t.chooseAccount}</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab("individual")}
              className={`px-5 py-2 rounded-lg font-medium ${activeTab === "individual" ? "bg-blue text-white" : "bg-gray-2 text-dark"}`}
            >
              {t.individualTab}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("company")}
              className={`px-5 py-2 rounded-lg font-medium ${activeTab === "company" ? "bg-blue text-white" : "bg-gray-2 text-dark"}`}
            >
              {t.companyTab}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {activeTab === "individual" ? (
              <>
                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="name" className="block mb-2.5">
                      {t.fullName} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formValues.name || ""}
                      onChange={handleChange}
                      placeholder={t.fullName}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.name && <p className="text-red text-sm">{errors.name}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="phone" className="block mb-2.5">
                      {t.phone} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder={t.phone}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="email" className="block mb-2.5">
                      {t.email} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder={t.email}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.email && <p className="text-red text-sm">{errors.email}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="password" className="block mb-2.5">
                      {t.password} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder={t.password}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.password && <p className="text-red text-sm">{errors.password}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="address" className="block mb-2.5">
                    {t.address} <span className="text-red">{t.required}</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formValues.address}
                    onChange={handleChange}
                    placeholder={t.address}
                    className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                  />
                  {errors.address && <p className="text-red text-sm">{errors.address}</p>}
                </div>
              </>
            ) : (
              <>
                {/* Company Form Fields */}
                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="companyName" className="block mb-2.5">
                      {t.companyName} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={formValues.companyName || ""}
                      onChange={handleChange}
                      placeholder={t.companyName}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.companyName && <p className="text-red text-sm">{errors.companyName}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="contactName" className="block mb-2.5">
                      {t.contactName} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      value={formValues.contactName || ""}
                      onChange={handleChange}
                      placeholder={t.contactName}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.contactName && <p className="text-red text-sm">{errors.contactName}</p>}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="phone" className="block mb-2.5">
                      {t.phone} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder={t.phone}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="email" className="block mb-2.5">
                      {t.email} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder={t.email}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.email && <p className="text-red text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="password" className="block mb-2.5">
                      {t.password} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder={t.password}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.password && <p className="text-red text-sm">{errors.password}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="trn" className="block mb-2.5">
                      {t.trn} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      id="trn"
                      value={formValues.trn || ""}
                      onChange={handleChange}
                      placeholder={t.trn}
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.trn && <p className="text-red text-sm">{errors.trn}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="address" className="block mb-2.5">
                    {t.address} <span className="text-red">{t.required}</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formValues.address}
                    onChange={handleChange}
                    placeholder={t.address}
                    className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                  />
                  {errors.address && <p className="text-red text-sm">{errors.address}</p>}
                </div>
              </>
            )}

            <button type="submit" className="primary-btn mx-auto mt-7.5">{t.createButton}</button>

            <p className="text-center mt-6">
              {t.alreadyAccount}
              <Link href="/signin" className="text-dark hover:text-blue pl-2">{t.signIn}</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;