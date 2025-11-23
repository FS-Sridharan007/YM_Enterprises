import React, { useState, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { productCategories } from "../data/products";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const BuyNowPage = () => {
  const { categoryId, productId } = useParams();
  const category = productCategories.find((c) => c.id === categoryId);
  const product = category?.items?.find((p) => p.id === productId);

  const [activeImg, setActiveImg] = useState(product?.images?.[0]?.src);
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [deliveryMsg, setDeliveryMsg] = useState("");

  const navigate = useNavigate();


  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return null;

  // 1️⃣ AUTO DISCOUNT LOGIC
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // 2️⃣ STOCK BADGE COLOR
  const stockColor =
    product.stock > 10 ? "bg-green-500" :
    product.stock > 3 ? "bg-yellow-500" :
    "bg-red-500";

  // 3️⃣ TOTAL PRICE
  const totalPrice = product.price * qty;

  // 4️⃣ PINCODE CHECKER
  const checkPincode = () => {
    const valid = /^[1-9][0-9]{5}$/;
    if (!valid.test(pincode)) {
      setDeliveryMsg("❌ Invalid pincode");
      return;
    }

    const fastArea = ["600001", "560001", "110001"];
    if (fastArea.includes(pincode)) {
      setDeliveryMsg("🚚 Delivery in 1–2 days");
    } else {
      setDeliveryMsg("🚚 Delivery in 3–5 days");
    }
  };

  return (
    <motion.section
      className="pt-32 pb-24 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Back Button */}
        <Link
          to={`/products/${categoryId}/${productId}`}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-6"
        >
          <FiArrowLeft className="mr-2" /> Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT IMAGE PANEL */}
          <div>
            <div className="bg-white rounded-3xl p-4 shadow-lg relative">
              <div className="w-full h-[420px] rounded-2xl overflow-hidden flex justify-center items-center">
                <img src={activeImg} className="w-full h-full object-contain" />
              </div>

              {/* Stock Badge */}
              <p
                className={`absolute top-6 left-6 text-white px-4 py-1 text-sm rounded-full ${stockColor}`}
              >
                {product.stock} in Stock
              </p>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-4 mt-5 overflow-x-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(img.src)}
                  className={`w-20 h-20 border-2 rounded-xl overflow-hidden ${
                    activeImg === img.src ? "border-brand-teal" : "border-gray-300"
                  }`}
                >
                  <img src={img.src} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL — INFO */}
          <div>
            <h1 className="text-4xl font-bold text-brand-charcoal">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center mt-3 gap-2">
              <AiFillStar className="text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-500 text-sm">(232 reviews)</span>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 mt-4">{product.shortDescription}</p>

            {/* Pricing Section */}
            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
              <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-bold text-brand-teal">
                  ₹{product.price.toLocaleString()}
                </h2>

                {product.originalPrice && (
                  <>
                    <p className="line-through text-gray-400 text-lg">
                      ₹{product.originalPrice.toLocaleString()}
                    </p>
                    <p className="bg-green-500 text-white px-3 py-1 text-sm rounded-full">
                      {discountPercent}% OFF
                    </p>
                  </>
                )}
              </div>

              <p className="text-green-600 mt-2">✓ In Stock — Ready to Ship</p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <p className="font-medium mb-2">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="p-2 bg-gray-200 rounded-full"
                >
                  <FiMinus />
                </button>
                <span className="text-xl font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-2 bg-gray-200 rounded-full"
                >
                  <FiPlus />
                </button>
              </div>

              <p className="text-gray-700 mt-2 font-semibold">
                Total: ₹{totalPrice.toLocaleString()}
              </p>
            </div>

            {/* Pincode Check */}
            <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
              <p className="font-medium mb-2">Check Delivery</p>
              <div className="flex gap-3">
                <input
                  className="border p-2 rounded-lg flex-1"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button
                  onClick={checkPincode}
                  className="bg-brand-teal text-white px-4 py-2 rounded-lg"
                >
                  Check
                </button>
              </div>
              {deliveryMsg && (
                <p className="mt-2 text-sm font-medium">{deliveryMsg}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="hidden md:flex gap-4 mt-6">
              <button className="flex-1 p-4 border-2 border-brand-teal text-brand-teal font-bold rounded-xl">
                Add to Cart
              </button>      
              <button className="flex-1 p-4 bg-brand-teal text-white font-bold rounded-xl">
                Buy Now
              </button>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-6 mt-10 text-center">
              <div>
                <p className="text-brand-teal text-2xl">🚚</p>
                <p className="text-sm">Free Shipping</p>
              </div>
              <div>
                <p className="text-brand-teal text-2xl">🛡</p>
                <p className="text-sm">2 Year Warranty</p>
              </div>
              <div>
                <p className="text-brand-teal text-2xl">↩️</p>
                <p className="text-sm">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Buy Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-50">
          <p className="text-lg font-bold">₹{totalPrice.toLocaleString()}</p>
          <button
            onClick={() => navigate(`/payment/${categoryId}/${productId}`)}
            className="bg-brand-gold px-6 py-2 rounded-lg font-semibold text-brand-charcoal"
          >
            Buy Now
          </button>
        </div>
    </motion.section>
  );
};

export default BuyNowPage;
