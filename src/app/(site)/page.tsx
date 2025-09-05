import Home from "@/components/Home";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interliners",
  description: "Welcome to the world of interlining, here you can find our latest collection’s to help with all your interlining needs. Whether it be for Shirts, Bottoms, Jackets or Arabic thobes we got it all.",
};

export default function HomePage() {
  return (
    <div className="relative">
      <Home />
      <Link
        href="https://wa.me/+971-6-7436061"
        target="_blank"
        className="fixed bottom-10 right-10 z-[999999999] bg-white shadow-lg rounded-full p-2"
      >
        <img
          src="/images/icons/whatsaap-icon.webp"
          alt="WhatsApp"
          className="w-12 h-12 hover:scale-110 transition-transform"
        />
      </Link>
    </div>

  );
}
