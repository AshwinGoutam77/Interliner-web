import React, { useState } from "react";
import Image from "next/image";

const PaymentMethod = () => {
  const [payment, setPayment] = useState("bank");
  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="grid grid-cols-2 gap-3">
          <label
            htmlFor="bank"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="bank"
                id="bank"
                className="sr-only"
                onChange={() => setPayment("bank")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "bank"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "bank"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/checkout/bank.svg" alt="bank" width={29} height={12} />
                </div> */}

                <div className="">
                  <p>Bank transfer</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="cash"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="cash"
                id="cash"
                className="sr-only"
                onChange={() => setPayment("cash")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "cash"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "cash"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/icons/cheque.png" alt="cash" width={21} height={21} />
                </div> */}

                <div className="">
                  <p>Cheque</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="wallet"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="wallet"
                id="wallet"
                className="sr-only"
                onChange={() => setPayment("wallet")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "wallet"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>
            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "wallet"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/icons/wallet.png" alt="paypal" width={75} height={20} />
                </div> */}

                <div className="">
                  <p>My Wallet</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="pay-later"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="pay-later"
                id="pay-later"
                className="sr-only"
                onChange={() => setPayment("pay-later")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "pay-later"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "pay-later"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/icons/pay.png" alt="pay-later" width={21} height={21} />
                </div> */}

                <div className="">
                  <p>Pay later</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="full-payment"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="full-payment"
                id="full-payment"
                className="sr-only"
                onChange={() => setPayment("full-payment")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "full-payment"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "full-payment"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/icons/full-payment.png" alt="full-payment" width={21} height={21} />
                </div> */}

                <div className="">
                  <p>Full Payments</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="part-payment"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="part-payment"
                id="part-payment"
                className="sr-only"
                onChange={() => setPayment("part-payment")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "part-payment"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "part-payment"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/icons/part-payment.png" alt="part-payment" width={21} height={21} />
                </div> */}

                <div className="">
                  <p>Part Payments</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="online-link"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="online-link"
                id="online-link"
                className="sr-only"
                onChange={() => setPayment("online-link")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === "online-link"
                  ? "border-4 border-blue"
                  : "border border-gray-4"
                  }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none w-full ${payment === "online-link"
                ? "border-transparent bg-gray-2"
                : " border-gray-4 shadow-1"
                }`}
            >
              <div className="flex items-center">
                {/* <div className="pr-2.5">
                  <Image src="/images/icons/link.png" alt="online-link" width={21} height={21} />
                </div> */}

                <div className="">
                  <p>Online Link</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
