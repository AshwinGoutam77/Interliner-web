'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginAsUser } from "@/redux/features/authSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ForgotTranslations } from "@/data";

interface Errors {
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const Forgot: React.FC = () => {
  const lang = useSelector((state: any) => state.language.lang); // redux language
  const t = ForgotTranslations[lang] || ForgotTranslations.en;

  const dispatch = useDispatch();
  const router = useRouter();

  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    let newErrors: Errors = {};

    if (!phone.trim()) {
      newErrors.phone = `${t.phone} is required`;
    }

    if (!password.trim()) {
      newErrors.password = `${t.newPassword} is required`;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangePassword = () => {
    if (!validate()) return;

    // Dispatch Redux or API call
    dispatch(loginAsUser());

    // Redirect after success
    router.push("/dashboard");
  };

  return (
    <section className="overflow-hidden py-20 bg-[#f3f4f62e] mt-45" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-[url('/images/banner/login-banner-new.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-11">
            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
              {t.title}
            </h2>
            <p>{t.subtitle}</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Phone */}
            <div className="mb-5">
              <label htmlFor="phone" className="block mb-2.5">
                {t.phone} <span className="text-red">{t.required}</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder={t.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200`}
              />
              {errors.phone && <p className="text-red text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* New Password */}
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2.5">
                {t.newPassword} <span className="text-red">{t.required}</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder={t.newPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-lg border ${errors.password ? "border-red-500" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200`}
              />
              {errors.password && <p className="text-red text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block mb-2.5">
                {t.confirmPassword} <span className="text-red">{t.required}</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder={t.confirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200`}
              />
              {errors.confirmPassword && <p className="text-red text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Submit */}
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleChangePassword}
                className="primary-btn"
              >
                {t.changeButton}
              </button>
            </div>

            {/* Back */}
            <p className="text-center mt-6">
              <button
                type="button"
                onClick={() => router.push("/signin")}
                className="text-dark ease-out duration-200 hover:text-blue flex items-center justify-center mx-auto gap-2"
              >
                <ChevronLeft /> {t.back}
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
