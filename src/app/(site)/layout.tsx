"use client";
import { useState, useEffect } from "react";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import "../css/global.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <LayoutContent>{children}</LayoutContent>
    </ReduxProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state: RootState) => state.language.lang);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        {loading ? <PreLoader /> : (
          <>
            <CartModalProvider>
              <ModalProvider>
                <PreviewSliderProvider>
                  <Header />
                  {children}
                  <QuickViewModal />
                  <CartSidebarModal />
                  <PreviewSliderModal />
                </PreviewSliderProvider>
              </ModalProvider>
            </CartModalProvider>
            {/* <ScrollToTop /> */}
            <Link
              href="https://wa.me/97167436061"
              target="_blank"
              className="fixed bottom-10 right-10 z-[99] bg-white shadow-lg rounded-full"
            >
              <img
                src="/images/icons/whatsaap-icon-jpg.jfif"
                alt="WhatsApp"
                className="w-18 h-18 object-cover hover:scale-110 transition-transform rounded-full"
              />
            </Link>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

