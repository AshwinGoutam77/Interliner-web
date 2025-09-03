// app/privacy-policy/page.jsx
"use client";

import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-[#f3f4f62e]">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mt-50 pt-10 pb-20">
                <h1 className="font-semibold text-blue text-xl sm:text-2xl xl:text-custom-2 mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    At <strong>Interliners</strong>, we value your privacy and are committed
                    to protecting your personal information. This Privacy Policy outlines
                    how we collect, use, and safeguard your data when you use our website
                    and services.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal information such as your name, email address,
                    phone number, and payment details when you interact with our services.
                    Additionally, we may collect non-personal data like IP addresses,
                    browser type, and usage statistics.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>To provide and improve our services</li>
                    <li>To process payments and bookings</li>
                    <li>To send you updates, offers, and notifications</li>
                    <li>To ensure security and prevent fraud</li>
                    <li>To comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">3. Sharing of Information</h2>
                <p className="mb-4">
                    We do not sell or rent your personal data. We may share your information
                    only with trusted third parties, such as payment processors or service
                    providers, to deliver our services effectively.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">4. Data Security</h2>
                <p className="mb-4">
                    We implement industry-standard security measures to protect your data.
                    However, please note that no method of transmission over the internet is
                    100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">5. Cookies & Tracking</h2>
                <p className="mb-4">
                    We use cookies and similar technologies to enhance your browsing
                    experience, analyze traffic, and personalize content. You can manage
                    cookie preferences in your browser settings.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">6. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, update, or request deletion of your
                    personal information. Please contact us if you wish to exercise these
                    rights.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">7. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be
                    posted on this page with the updated date.
                </p>

                <h2 className="text-2xl font-semibold text-blue mt-6 mb-3">8. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us
                    at:{" "}
                    <a
                        href="mailto:support@interliners.com"
                        className="text-blue-600 underline"
                    >
                        support@interliners.com
                    </a>
                </p>
            </div>
        </div>
    );
}
