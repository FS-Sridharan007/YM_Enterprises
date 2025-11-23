import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "../data/products";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const PaymentPage = () => {
  const { categoryId, productId } = useParams();
  const category = productCategories.find((c) => c.id === categoryId);
  const product = category?.items?.find((p) => p.id === productId);

  const [qty, setQty] = useState(1);

  // Razorpay load
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!product) return null;

  const subtotal = product.price * qty;
  const gst = Math.round(subtotal * 0.18);
  const delivery = 0;
//const totalAmount = subtotal + gst + delivery;
  const totalAmount = subtotal + delivery;

  const handlePayment = () => {
    const options = {
      key: "rzp_test_Rj4nr8gGmrRcoA", // Replace with your test key
      amount: totalAmount * 100,
      currency: "INR",
      name: "Enzolt Solar",
      description: "Order Payment",
      image: product.images[0].src,
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: "Client Demo",
        email: "demo@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0f766e",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <motion.section
      className="pt-32 pb-24 bg-gray-50"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Back Button */}
        <Link
          to={`/buy-now/${categoryId}/${productId}`}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Buy Now
        </Link>

        <h1 className="text-4xl font-bold text-brand-charcoal text-center mb-12">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-10">

            {/* Delivery Address */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

              <div className="text-gray-700 leading-relaxed">
                <p><strong>John Doe</strong></p>
                <p>+91 9876543210</p>
                <p>123, Test Street, Anna Nagar</p>
                <p>Chennai - 600040</p>
              </div>

              <button className="mt-4 text-brand-teal font-semibold">
                Edit Address
              </button>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>

              <div className="border p-4 rounded-xl flex items-center justify-between">
                <p className="font-semibold">Razorpay Secure Payment</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                  className="h-6"
                />
              </div>

              <button
                onClick={handlePayment}
                className="mt-6 bg-brand-teal text-white w-full py-3 rounded-xl font-bold hover:bg-brand-gold hover:text-brand-charcoal transition"
              >
                Pay Securely
              </button>
            </div>

          </div>

          {/* RIGHT SECTION (PRICE DETAILS) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg h-fit">
            <h2 className="text-xl font-bold mb-6">Price Details</h2>

            {/* Product Row */}
            <div className="flex gap-4 border-b pb-4 mb-4">
              <img
                src={product.images[0].src}
                className="w-20 h-20 object-contain bg-gray-100 rounded-xl"
              />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-sm text-gray-600">Qty: {qty}</p>
              </div>
            </div>

            {/* Price Items */}
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{subtotal.toLocaleString()}</p>
              </div>

              {/* <div className="flex justify-between">
                <p>GST (18%)</p>
                <p>₹{gst.toLocaleString()}</p>
              </div> */}

              <div className="flex justify-between">
                <p>Delivery</p>
                <p className="text-green-600">FREE</p>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold mt-4">
                <p>Total Amount</p>
                <p>₹{totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Security Icons */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">🔒 100% Secure Payments • 🛡 Buyer Protection • 🚚 Fast Delivery</p>
        </div>

      </div>
    </motion.section>
  );
};

export default PaymentPage;
