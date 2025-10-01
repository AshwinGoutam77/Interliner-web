"use client";
import { CreditTranslations } from "@/data";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Page() {
    const role = useSelector((state) => state.auth.role);
    const lang = useSelector((state) => state.language.lang);
    const t = CreditTranslations[lang] || CreditTranslations.en;

    const creditData = [
        { label: t.totalCreditLimit, value: "4000" },
        { label: t.creditAmountUsed, value: "2000" },
        { label: t.balanceCreditAvailable, value: "1000" },
        { label: t.totalCreditPeriod, value: "10 Days" },
        { label: t.balanceCreditPeriod, value: "8 Days" },
        { label: t.paymentDueDate, value: "24/08/2025" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-dark">{t.pageTitle}</h1>

            {/* Card */}
            <div className="bg-white rounded-2xl border border-[#ccc9] p-6">
                <div className="space-y-4">
                    {creditData.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between border-b border-[#ccc9] last:border-none pb-3 last:pb-0"
                        >
                            <span
                                className={`${idx == 2 || idx == 4 ? "text-red" : "text-gray-6"
                                    } font-medium`}
                            >
                                {item.label}
                            </span>
                            <span
                                className={`${idx == 2 || idx == 4 ? "text-red" : "text-gray-6"
                                    } font-semibold`}
                            >
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

                {role !== "sales" && (
                    <Link
                        href={{
                            pathname: "/dashboard/payment",
                            query: { tab: "make-payment" },
                        }}
                        className="primary-btn mt-6"
                    >
                        {t.makePayment}
                    </Link>
                )}
            </div>
        </div>
    );
}
