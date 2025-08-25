'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("individual"); // default tab

  return (
    <>
      <section className="overflow-hidden py-20 bg-[#f3f4f62e]">
        <Breadcrumb title={"Signup"} pages={["Signup"]} />
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
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
                className={`px-5 py-2 rounded-lg font-medium ${activeTab === "individual"
                  ? "bg-blue text-white"
                  : "bg-gray-2 text-dark"
                  }`}
              >
                Individual
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("company")}
                className={`px-5 py-2 rounded-lg font-medium ${activeTab === "company"
                  ? "bg-blue text-white"
                  : "bg-gray-2 text-dark"
                  }`}
              >
                Company
              </button>
            </div>

            {/* Form */}
            <div className="mt-5.5">
              <form>
                {activeTab === "individual" ? (
                  <>
                    {/* Individual Fields */}
                    <div className="mb-5">
                      <label htmlFor="name" className="block mb-2.5">
                        Full Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="phone" className="block mb-2.5">
                        Phone Number <span className="text-red">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="email" className="block mb-2.5">
                        Email Address <span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="password" className="block mb-2.5">
                        Password <span className="text-red">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="address" className="block mb-2.5">
                        Address <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter your address"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Company Fields */}
                    <div className="mb-5">
                      <label htmlFor="companyName" className="block mb-2.5">
                        Company Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="Enter company name"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="name" className="block mb-2.5">
                        Contact Person Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter contact person name"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="phone" className="block mb-2.5">
                        Phone Number <span className="text-red">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter phone number"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="email" className="block mb-2.5">
                        Email Address <span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="password" className="block mb-2.5">
                        Password <span className="text-red">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="address" className="block mb-2.5">
                        Address <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter company address"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="trn" className="block mb-2.5">
                        TRN Number <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="trn"
                        placeholder="Enter TRN Number"
                        className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5"
                >
                  Create Account
                </button>

                <p className="text-center mt-6">
                  Already have an account?
                  <Link
                    href="/signin"
                    className="text-dark ease-out duration-200 hover:text-blue pl-2"
                  >
                    Sign in Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
