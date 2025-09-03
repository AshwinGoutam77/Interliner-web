"use client";
import Link from "next/link";
import React, { useState } from "react";

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
      if (!formValues.name) newErrors.name = "Full Name is required";
    } else {
      if (!formValues.companyName) newErrors.companyName = "Company Name is required";
      if (!formValues.contactName) newErrors.contactName = "Contact Person Name is required";
      if (!formValues.trn) newErrors.trn = "TRN Number is required";
    }

    if (!formValues.phone) newErrors.phone = "Phone Number is required";
    else if (!/^[0-9]{10,15}$/.test(formValues.phone)) newErrors.phone = "Invalid phone number";

    if (!formValues.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = "Invalid email format";

    if (!formValues.password) newErrors.password = "Password is required";
    else if (formValues.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formValues.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("✅ Form submitted successfully:", formValues);
  };

  return (
    <section className="overflow-hidden py-20 bg-[#f3f4f62e] mt-40">
      <div className="absolute inset-0 bg-[url('/images/banner/login-banner-new.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-6">
            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
              Create an Account
            </h2>
            <p>Choose account type below</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab("individual")}
              className={`px-5 py-2 rounded-lg font-medium ${activeTab === "individual" ? "bg-blue text-white" : "bg-gray-2 text-dark"
                }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("company")}
              className={`px-5 py-2 rounded-lg font-medium ${activeTab === "company" ? "bg-blue text-white" : "bg-gray-2 text-dark"
                }`}
            >
              Company
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {activeTab === "individual" ? (
              <>
                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="name" className="block mb-2.5">
                      Full Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formValues.name || ""}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.name && <p className="text-red text-sm">{errors.name}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="phone" className="block mb-2.5">
                      Phone Number <span className="text-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="email" className="block mb-2.5">
                      Email Address <span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.email && <p className="text-red text-sm">{errors.email}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="password" className="block mb-2.5">
                      Password <span className="text-red">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.password && <p className="text-red text-sm">{errors.password}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="address" className="block mb-2.5">
                    Address <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formValues.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                  />
                  {errors.address && <p className="text-red text-sm">{errors.address}</p>}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="companyName" className="block mb-2.5">
                      Company Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={formValues.companyName || ""}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.companyName && <p className="text-red text-sm">{errors.companyName}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="contactName" className="block mb-2.5">
                      Contact Person Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      value={formValues.contactName || ""}
                      onChange={handleChange}
                      placeholder="Enter contact person name"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.contactName && <p className="text-red text-sm">{errors.contactName}</p>}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="phone" className="block mb-2.5">
                      Phone Number <span className="text-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="email" className="block mb-2.5">
                      Email Address <span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.email && <p className="text-red text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="mb-5 w-1/2">
                    <label htmlFor="password" className="block mb-2.5">
                      Password <span className="text-red">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.password && <p className="text-red text-sm">{errors.password}</p>}
                  </div>

                  <div className="mb-5 w-1/2">
                    <label htmlFor="trn" className="block mb-2.5">
                      TRN Number <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="trn"
                      value={formValues.trn || ""}
                      onChange={handleChange}
                      placeholder="Enter TRN Number"
                      className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                    />
                    {errors.trn && <p className="text-red text-sm">{errors.trn}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="address" className="block mb-2.5">
                    Address <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formValues.address}
                    onChange={handleChange}
                    placeholder="Enter company address"
                    className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5"
                  />
                  {errors.address && <p className="text-red text-sm">{errors.address}</p>}

                </div>
              </>
            )}

            <button type="submit" className="primary-btn mx-auto mt-7.5">
              Create Account
            </button>

            <p className="text-center mt-6">
              Already have an account?
              <Link href="/signin" className="text-dark hover:text-blue pl-2">
                Sign in Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
