// app/privacy-policy/page.jsx
"use client";

import React from "react";

export default function TermsOfUse() {
    return (
        <div className="bg-[#f3f4f62e]">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mt-50 pt-10 pb-20">
                <h1 className="font-semibold text-blue text-xl sm:text-2xl xl:text-custom-2 mb-6">Terms of Use</h1>
                <p className="mb-4">
                    These Terms of Use (“Terms”) govern your access to and use of the
                    Interliners website and services. By using our platform, you agree to
                    these Terms.
                </p>

                <h2 className="text-xl font-semibold text-blue mt-6 mb-2">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing or using our services, you acknowledge that you have read,
                    understood, and agreed to be bound by these Terms.
                </p>

                <h2 className="text-xl font-semibold text-blue mt-6 mb-2">2. Use of Services</h2>
                <p className="mb-4">
                    You agree to use our services only for lawful purposes and in compliance
                    with all applicable laws and regulations.
                </p>

                <h2 className="text-xl font-semibold text-blue mt-6 mb-2">3. Intellectual Property</h2>
                <p className="mb-4">
                    All content, trademarks, and intellectual property on this site are the
                    property of Interliners or its licensors. You may not copy, reproduce,
                    or distribute without prior consent.
                </p>

                <h2 className="text-xl font-semibold text-blue mt-6 mb-2">4. Limitation of Liability</h2>
                <p className="mb-4">
                    Interliners shall not be held liable for any damages arising from the
                    use or inability to use our services.
                </p>

                <h2 className="text-xl font-semibold text-blue mt-6 mb-2">5. Termination</h2>
                <p className="mb-4">
                    We reserve the right to suspend or terminate your access to our services
                    if you violate these Terms.
                </p>

                <h2 className="text-xl font-semibold text-blue mt-6 mb-2">6. Changes to Terms</h2>
                <p className="mb-4">
                    We may update these Terms occasionally. Continued use of our services
                    means you accept any modifications.
                </p>
            </div>
        </div>
    );
}
