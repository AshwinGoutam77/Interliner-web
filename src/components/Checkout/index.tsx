"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const Checkout = () => {
  const router = useRouter()
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice)

  const [payment, setPayment] = useState("bank");
  const [showBankModal, setShowBankModal] = useState(false);
  const [accountNo, setAccountNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState(false);

  const handleSelect = (method: string) => {
    setPayment(method);

  };

  const handleSubmitPayment = () => {
    if (payment === "bank" || payment === "cash") {
      setShowBankModal(true);
    } else {
      router.push('/order-success')
    }
  }

  const validateBankDetails = (accountNo: string, ifsc: string) => {
    if (!accountNo.trim()) {
      setError(true);
      return false;
    }
    if (!ifsc.trim()) {
      setError(true)
      return false;
    }
    return true;
  };


  return (
    <>
      <section className="overflow-hidden py-20 bg-[#f3f4f62e]">
        <Breadcrumb title={"Checkout"} pages={["checkout"]} />
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* <form> */}
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
            {/* <!-- checkout left --> */}
            <div className="lg:max-w-[670px] w-full">
              {/* <!-- login box --> */}
              {/* <Login /> */}

              {/* <!-- billing details --> */}
              <Billing />

              {/* <!-- address box two --> */}
              {/* <Shipping /> */}

              {/* <!-- others note box --> */}
              <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                <div>
                  <label htmlFor="notes" className="block mb-2.5">
                    Other Notes (optional)
                  </label>

                  <textarea
                    name="notes"
                    id="notes"
                    rows={5}
                    placeholder="Notes about your order, e.g. speacial notes for delivery."
                    className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* // <!-- checkout right --> */}
            <div className="max-w-[455px] w-full">
              {/* <!-- order list box --> */}
              <div className="bg-white shadow-1 rounded-[5px]">
                <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5 bg-blue rounded-t-[5px]">
                  <h3 className="font-medium text-xl text-white">
                    Your Order
                  </h3>
                </div>

                <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                  {/* <!-- product item --> */}
                  {cartItems.map((item, key) => (
                    <Link href='/shop-details' className="flex items-center justify-between py-5 border-b border-gray-3" key={key}>
                      <div>
                        <p className="text-dark">{item.title}</p>
                      </div>
                      <div className="flex">
                        <p className="text-dark text-right"> ${item.discountedPrice * item.quantity}</p>
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                            fill=""
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}


                  {/* <!-- product item --> */}
                  <Link href='/shop-details' className="flex items-center justify-between py-5 border-b border-gray-3">
                    <div>
                      <p className="text-dark">Threads</p>
                    </div>
                    <div className="flex">
                      <p className="text-dark text-right">$129.00</p>
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                          fill=""
                        />
                      </svg>
                    </div>
                  </Link>

                  {/* <!-- product item --> */}
                  <Link href='/shop-details' className="flex items-center justify-between py-5 border-b border-gray-3">
                    <div>
                      <p className="text-dark">Cuffs, Collars & Bands</p>
                    </div>
                    <div className="flex">
                      <p className="text-dark text-right">$29.00</p>
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                          fill=""
                        />
                      </svg>
                    </div>
                  </Link>

                  {/* <!-- product item --> */}
                  <div className="flex items-center justify-between py-5 border-b border-gray-3">
                    <div>
                      <p className="text-dark">GST</p>
                    </div>
                    <div>
                      <p className="text-dark text-right">$2.00</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-5 border-b border-gray-3">
                    <div>
                      <p className="text-dark">Promo</p>
                    </div>
                    <div>
                      <p className="text-dark text-right">$15.00</p>
                    </div>
                  </div>

                  {/* <!-- total --> */}
                  <div className="flex items-center justify-between pt-5">
                    <div>
                      <p className="font-medium text-lg text-dark">Total</p>
                    </div>
                    <div>
                      <p className="font-medium text-lg text-dark text-right">
                        $1072.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- coupon box --> */}
              <Coupon />

              {/* <!-- shipping box --> */}
              {/* <ShippingMethod /> */}

              {/* <!-- payment box --> */}
              <PaymentMethod handleSelect={handleSelect} payment={payment} setPayment={setPayment} showBankModal={showBankModal} setShowBankModal={setShowBankModal} setAccountNo={setAccountNo} setIfsc={setIfsc} setBankName={setBankName} accountNo={accountNo} ifsc={ifsc} bankName={bankName} />

              {/* <!-- checkout button --> */}
              <div className="text-end">
                <button
                  className="primary-btn mt-7 ml-auto"
                  onClick={() => handleSubmitPayment()}
                >
                  Confirm Order
                </button>
              </div>

              {showBankModal && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-[#0000006b] z-[9999]"
                  onClick={() => setShowBankModal(false)}
                >
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-dark">
                        Enter Bank Details
                      </h2>
                      <span className="cursor-pointer" onClick={() => setShowBankModal(false)}>
                        <X />
                      </span>
                    </div>

                    {/* Account Number */}
                    <label className="block mb-2">
                      Account Number <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={accountNo}
                      onChange={(e) => setAccountNo(e.target.value)}
                      className={`rounded-md border ${(!accountNo || !/^\d+$/.test(accountNo)) && error && "border-red-500"
                        } border-gray-3 bg-gray-1 w-full py-2.5 px-5 mb-2`}
                    />
                    {(!accountNo || !/^\d+$/.test(accountNo)) && error && (
                      <p className="text-red text-sm mb-3">
                        Please enter a valid account number
                      </p>
                    )}

                    {/* IFSC Code */}
                    <label className="block mb-2">
                      IFSC Code <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={ifsc}
                      onChange={(e) => setIfsc(e.target.value)}
                      className={`rounded-md border ${(!ifsc || !/^[A-Za-z]{4}\d{7}$/.test(ifsc)) &&
                        error &&
                        "border-red-500"
                        } border-gray-3 bg-gray-1 w-full py-2.5 px-5 mb-2`}
                    />
                    {(!ifsc || !/^[A-Za-z]{4}\d{7}$/.test(ifsc)) && error && (
                      <p className="text-red text-sm mb-3">Please enter a valid IFSC code</p>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={() => setShowBankModal(false)}
                        className="px-4 py-2 text-dark rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          if (!validateBankDetails(accountNo, ifsc)) {
                            setError(true);
                            return;
                          }
                          setError(false);
                          setShowBankModal(false);
                          router.push('/order-success')
                        }}
                        className="primary-btn"
                      >
                        Submit
                      </button>

                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
          {/* </form > */}
        </div >
      </section >
    </>
  );
};

export default Checkout;
