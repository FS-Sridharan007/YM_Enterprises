import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "../data/products";
import { enzoltCategories } from "../data/enzoltProduct";
import { festonCategories } from "../data/festonProduct";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const PaymentPage = () => {
  const { categoryId, productId, variantId } = useParams();
  const [qty, setQty] = useState(1);

  // ---------------------------
  // UNIVERSAL PRODUCT LOADER
  // ---------------------------
  const loadProduct = () => {
    // 1️⃣ Normal products first
    const normalCat = productCategories.find((c) => c.id === categoryId);
    if (normalCat) {
      return normalCat.items.find((p) => p.id === productId);
    }

    // 2️⃣ Enzolt products
    const enzoltCat = enzoltCategories.find((c) => c.id === categoryId);
    if (enzoltCat) {
      return enzoltCat?.items?.find((p) => p.id === productId) || null;
    }

    // 3️⃣ Feston products
    const festonCat = festonCategories.find((c) => c.id === categoryId);
    return festonCat?.items?.find((p) => p.id === productId) || null;
  };

  const product = loadProduct();

  // ---------------------------
  // VARIANT LOADER
  // ---------------------------
  const loadVariant = () => {
    if (!product) return null;

    // If product has variants
    if (product.variants && Array.isArray(product.variants)) {
      return product.variants.find((v) => v.id === variantId);
    }

    // Default fallback (normal products)
    return {
      id: "default",
      label: product.label || product.power || "Standard",
      price: product.price,
      originalPrice: product.originalPrice,
      stock: product.stock,
      images: product.images
    };
  };

  const variant = loadVariant();

  // ---------------------------
  // LOAD Razorpay script
  // ---------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!product || !variant) {
    return (
      <div className="py-40 text-center text-2xl font-bold text-brand-charcoal">
        ❌ Product Not Found
      </div>
    );
  }

  // ---------------------------
  // PRICE CALCULATIONS
  // ---------------------------
  const subtotal = variant.price * qty;
  const gst = Math.round(subtotal * 0.18);
  const delivery = 0;
  // const totalAmount = subtotal + gst + delivery;
  const totalAmount = subtotal + delivery;

  // ---------------------------
  // PAYMENT HANDLER
  // ---------------------------
  const handlePayment = () => {
    const options = {
      key: "rzp_test_Rj4nr8gGmrRcoA",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Yazh Marutha Enterprises",
      description: "Order Payment",
      image: variant.images?.[0]?.src,
      handler: function () {
        alert("Payment Successful!");
      },
      prefill: {
        name: "Client Demo",
        email: "demo@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#0f766e"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <motion.section
      className="pt-32 pb-24 bg-gray-50"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        <Link
          to={`/buy-now/${categoryId}/${productId}`}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Buy Now
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12 text-brand-charcoal">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-10">

            {/* Address Box */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>John Doe</strong> <br />
                +91 9876543210 <br />
                123 Sample Street, Anna Nagar <br />
                Chennai - 600040
              </p>
            </div>

            {/* Payment Section */}
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

          {/* RIGHT SIDE - Price Box */}
          <div className="bg-white p-6 rounded-2xl shadow-lg h-fit">
            <h2 className="text-xl font-bold mb-6">Price Details</h2>

            <div className="flex gap-4 border-b pb-4 mb-4">
              <img
                src={variant.images?.[0]?.src}
                className="w-20 h-20 object-contain bg-gray-100 rounded-xl"
              />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-sm text-gray-600">
                  Model: {variant.label}
                </p>
                <p className="text-sm text-gray-600">Qty: {qty}</p>
              </div>
            </div>

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
      </div>
    </motion.section>
  );
};

export default PaymentPage;
