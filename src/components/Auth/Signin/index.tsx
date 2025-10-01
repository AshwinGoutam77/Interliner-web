'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsSales, loginAsUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { SigninTranslations } from "@/data";

interface Errors {
  phone?: string;
  password?: string;
}

const Signin: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = useSelector((state: any) => state.language.lang); // redux language
  const t = SigninTranslations[lang] || SigninTranslations.en;

  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    let newErrors: Errors = {};

    if (!phone.trim()) {
      newErrors.phone = `${t.phoneLabel} is required`;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!password.trim()) {
      newErrors.password = `${t.passwordLabel} is required`;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (role: "user" | "sales") => {
    if (!validate()) return;

    if (role === "user") {
      dispatch(loginAsUser());
    } else {
      dispatch(loginAsSales());
    }

    router.push("/dashboard");
  };

  return (
    <section className="overflow-hidden py-20 bg-[#f3f4f62e] mt-45" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-[url('/images/banner/login-banner-new.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center">
            <img src="/images/logo/permisis-logo.png" alt="logo" width={200} className="mx-auto" />
            <p className="mt-2">{t.broughtBy} <b className="text-blue">Interliners</b></p>
            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark my-5">{t.signInTitle}</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Phone */}
            <div className="mb-5">
              <label htmlFor="phone" className="block mb-2.5">
                {t.phoneLabel} <span className="text-red">{t.required}</span>
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder={t.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
              />
              {errors.phone && <p className="text-red text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2.5">
                {t.passwordLabel} <span className="text-red">{t.required}</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder={t.passwordPlaceholder}
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-lg border ${errors.password ? "border-red-500" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
              />
              {errors.password && <p className="text-red text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 mt-5 flex-col md:flex-row">
              <button className="primary-btn w-full" onClick={() => handleLogin("user")}>{t.signInCustomer}</button>
              <button className="primary-btn w-full" onClick={() => handleLogin("sales")}>{t.signInSales}</button>
            </div>

            <Link href="/forgot-password" className="block text-center text-dark-4 mt-4.5 ease-out duration-200 hover:text-dark">
              {t.forgetPassword}
            </Link>

            <span className="relative z-1 block font-medium text-center mt-4.5">
              <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
              <span className="inline-block px-3 bg-white">{t.or}</span>
            </span>

            <p className="text-center mt-6">
              {t.noAccount}
              <Link href="/signup" className="text-dark ease-out duration-200 hover:text-blue pl-2">{t.signUp}</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
