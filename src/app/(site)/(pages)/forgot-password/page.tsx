import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
import Forgot from "@/components/Auth/forgot";
export const metadata: Metadata = {
  title: "Signin Page | NextCommerce Nextjs E-commerce template",
  description: "This is Signin Page for NextCommerce Template",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Forgot />
    </main>
  );
};

export default SigninPage;
