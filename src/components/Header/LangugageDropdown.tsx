"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { setLanguage } from "@/redux/features/languageSlice";

type LangCode = "en" | "ar";
const OPTIONS: { code: LangCode; label: string }[] = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
];

export default function LanguageDropdown() {
    const dispatch = useDispatch();
    const lang = useSelector((s: RootState) => s.language.lang) as LangCode;

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLLIElement>(null);

    // Close on outside click / Esc
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    // Load persisted language (optional)
    useEffect(() => {
        try {
            const saved = localStorage.getItem("lang") as LangCode | null;
            if (saved && saved !== lang) dispatch(setLanguage(saved));
        } catch { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectLang = (l: LangCode) => {
        dispatch(setLanguage(l));
        try { localStorage.setItem("lang", l); } catch { }
        setOpen(false);
    };

    const current = OPTIONS.find(o => o.code === lang) || OPTIONS[0];

    return (
        <li ref={ref} className="relative list-none">
            <button
                type="button"
                onClick={() => setOpen(v => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/0 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue/30"
            >
                {/* Globe icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm0 18a8 8 0 110-16 8 8 0 010 16Z" />
                    <path d="M4 12h16M12 4c2.5 2.5 3.5 5.5 3.5 8s-1 5.5-3.5 8c-2.5-2.5-3.5-5.5-3.5-8s1-5.5 3.5-8Z" />
                </svg>
                <span className="whitespace-nowrap">{current.label}</span>
                {/* Chevron */}
                <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </button>

            {open && (
                <ul
                    role="listbox"
                    className="absolute right-0 z-50 mt-2 min-w-[11rem] rounded-xl border border-gray-200 bg-white/90 p-1 shadow-lg backdrop-blur-md"
                >
                    {OPTIONS.map(opt => {
                        const active = opt.code === lang;
                        return (
                            <li key={opt.code}>
                                <button
                                    role="option"
                                    aria-selected={active}
                                    onClick={() => selectLang(opt.code)}
                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100 ${active ? "font-medium" : "font-normal"
                                        }`}
                                >
                                    <span>{opt.label}</span>
                                    {active && (
                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
}
