import React from "react";
import SubGroup from "@/components/SubGroup/page";
import { Metadata } from "next";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import ShopDetails from "@/components/ShopDetails";

export const metadata: Metadata = {
    title: "Interliner",
    description: "Interliner - Your One-Stop Shop for Quality Products",
};

const SubCategory = () => {
    return (
        <main>
            <ShopDetails />
        </main>
    );
};

export default SubCategory;
