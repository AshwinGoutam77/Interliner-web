"use client";
import { RootState } from "@/redux/store";
import { Mail, MapPin, Phone, Pin } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContactTranslations } from "@/data";

const Contact = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const t = ContactTranslations[lang] || ContactTranslations.en;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName.trim()) newErrors.firstName = t.firstNameError;
    if (!formData.lastName.trim()) newErrors.lastName = t.lastNameError;

    if (formData.phone && !/^[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = t.invalidPhone;
    }

    if (!formData.message.trim()) newErrors.message = t.messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("✅ Form submitted:", formData);
    setShowModal(true);
    setFormData({ firstName: "", lastName: "", subject: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f62e] mt-40 lg:mt-30 md:mt-50">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            {/* Left Contact Info */}
            <div className="xl:max-w-[370px] w-full bg-white rounded-xl shadow-1">
              <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
                <p className="font-medium text-xl text-dark">{t.contactInfo}</p>
              </div>
              <div className="p-4 sm:p-7.5">
                <Link href="mailto:liners@eim.ae" className="mb-2 flex items-center gap-2">
                  <Mail size={18} /> liners@eim.ae
                </Link>
                <Link href="tel:+971-6-7436061" className="mb-2 flex items-center gap-2">
                  <Phone size={18} /> +971-6-7436061 / +971-6-5556354
                </Link>
                <Link
                  href="https://goo.gl/maps/1Ern1Fz4Ex2kQX9A8"
                  className="mb-4 flex items-center gap-2"
                >
                  <MapPin size={18} /> Head Office: Ajman – UAE
                </Link>
                <div className="w-full h-[320px] border border-0 rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115861.00676570407!2d55.4053!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f58edc0b5487%3A0x60a1a75568128b8a!2sAjman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1692941450555!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '5px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="firstName" className="block mb-2.5">
                      {t.firstName} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t.firstNamePlaceholder}
                      className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5"
                    />
                    {errors.firstName && <p className="text-red text-sm">{errors.firstName}</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="lastName" className="block mb-2.5">
                      {t.lastName} <span className="text-red">{t.required}</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={t.lastNamePlaceholder}
                      className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5"
                    />
                    {errors.lastName && <p className="text-red text-sm">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="subject" className="block mb-2.5">
                      {t.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.subjectPlaceholder}
                      className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="phone" className="block mb-2.5">
                      {t.phone}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5"
                    />
                    {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mb-7.5">
                  <label htmlFor="message" className="block mb-2.5">
                    {t.message} <span className="text-red">{t.required}</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    className="rounded-md border border-gray-3 bg-gray-1 w-full p-5"
                  />
                  {errors.message && <p className="text-red text-sm">{errors.message}</p>}
                </div>

                <button type="submit" className="primary-btn">
                  {t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-2">
          <div
            className="absolute inset-0 bg-[#0000006b]"
            onClick={() => setShowModal(false)}
          />
          <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full z-[9999]">
            <h2 className="text-2xl font-semibold mb-4 text-dark">{t.thankYou}</h2>
            <p className="text-gray-700 mb-6">{t.modalMessage}</p>
            <button
              className="primary-btn mx-auto"
              onClick={() => setShowModal(false)}
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
