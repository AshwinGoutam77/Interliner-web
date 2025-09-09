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
    </div>
  );
}
