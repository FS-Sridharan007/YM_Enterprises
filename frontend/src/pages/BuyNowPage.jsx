import React, { useState, useLayoutEffect, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { productCategories } from "../data/products";
import { enzoltCategories } from "../data/enzoltProduct";
import { festonCategories } from "../data/festonProduct";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const BuyNowPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  // ---------------------------
  // UNIVERSAL PRODUCT FINDER
  // ---------------------------
  const findProduct = () => {
    // Enzolt product
    if (categoryId === "enzolt-products") {
      const enzoltCat = enzoltCategories.find(
        (c) => c.id === "enzolt-products"
      );
      return enzoltCat?.items?.find((p) => p.id === productId);
    }

    // Feston product
    if (categoryId === "feston-products") {
      const festonCat = festonCategories.find(
        (c) => c.id === "feston-products"
      );
      return festonCat?.items?.find((p) => p.id === productId);
    }

    // Normal categories
    const category = productCategories.find((c) => c.id === categoryId);
    return category?.items?.find((p) => p.id === productId);
  };

  const product = findProduct();

  // ---------------------------
  // VARIANT STATE
  // ---------------------------
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeImg, setActiveImg] = useState("");
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [deliveryMsg, setDeliveryMsg] = useState("");

  // Scroll top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, productId]);

  // Initialise variant + image
  useEffect(() => {
    if (!product) return;

    const hasVariants =
      Array.isArray(product.variants) && product.variants.length > 0;

    // If variants exist → choose first one
    // Else create a default variant wrapper
    const initialVariant = hasVariants
      ? product.variants[0]
      : {
          id: "default",
          label: product.power || product.wattage || "Standard",
          price: product.price,
          originalPrice: product.originalPrice,
          stock: product.stock,
          images: product.images ?? []
        };

    setSelectedVariant(initialVariant);
    setActiveImg(initialVariant.images?.[0]?.src || "");
    setQty(1);
  }, [product]);

  if (!product || !selectedVariant) {
    return (
      <div className="p-32 text-center text-2xl">❌ Product Not Found</div>
    );
  }

  // ---------------------------
  // DERIVED VALUES
  // ---------------------------
  const discountPercent =
    selectedVariant.originalPrice &&
    Math.round(
      ((selectedVariant.originalPrice - selectedVariant.price) /
        selectedVariant.originalPrice) *
        100
    );

  const stockColor =
    selectedVariant.stock > 10
      ? "bg-green-500"
      : selectedVariant.stock > 3
      ? "bg-yellow-500"
      : "bg-red-500";

  const totalPrice = selectedVariant.price * qty;

  // ---------------------------
  // PINCODE CHECK
  // ---------------------------
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

        {/* 🔙 BACK BUTTON */}
        <Link
          to={
            categoryId === "enzolt-products"
              ? "/enzolt-products"
              : categoryId === "feston-products"
              ? "/feston-products"
              : `/products/${categoryId}`
          }
          className="flex items-center text-brand-teal hover:text-brand-gold mb-6"
        >
          <FiArrowLeft className="mr-2" /> Back
        </Link>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT: IMAGE PANEL */}
          <div>
            <div className="bg-white rounded-3xl p-4 shadow-lg relative">
              <div className="w-full h-[420px] rounded-2xl overflow-hidden flex justify-center items-center">
                <img
                  src={activeImg}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Stock Badge */}
              <p
                className={`absolute top-6 left-6 text-white px-4 py-1 text-sm rounded-full ${stockColor}`}
              >
                {selectedVariant.stock} in Stock
              </p>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-5 overflow-x-auto">
              {selectedVariant.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(img.src)}
                  className={`w-20 h-20 border-2 rounded-xl overflow-hidden ${
                    activeImg === img.src
                      ? "border-brand-teal"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div>
            <h1 className="text-4xl font-bold text-brand-charcoal">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <AiFillStar className="text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-500 text-sm">(232 reviews)</span>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 mt-4">
              {product.shortDescription || product.description}
            </p>

            {/* VARIANT SELECTOR */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <p className="font-medium text-lg mb-2">Select Model</p>
                <div className="flex gap-4 flex-wrap">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setSelectedVariant(v);
                        setActiveImg(v.images?.[0]?.src);
                      }}
                      className={`px-5 py-3 rounded-xl border transition-all min-w-[120px] ${
                        selectedVariant.id === v.id
                          ? "bg-brand-teal border-brand-teal text-white shadow-md"
                          : "bg-white border-gray-300 text-gray-700 hover:border-brand-teal"
                      }`}
                    >
                      <p className="font-semibold">{v.label}</p>
                      <p className="text-xs">
                        ₹{v.price.toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PRICE SECTION */}
            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
              <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-bold text-brand-teal">
                  ₹{selectedVariant.price.toLocaleString()}
                </h2>

                {selectedVariant.originalPrice && (
                  <>
                    <p className="line-through text-gray-400 text-lg">
                      ₹{selectedVariant.originalPrice.toLocaleString()}
                    </p>
                    <p className="bg-green-500 text-white px-3 py-1 text-sm rounded-full">
                      {discountPercent}% OFF
                    </p>
                  </>
                )}
              </div>

              <p className="text-green-600 mt-2">
                ✓ In Stock — Ready to Ship
              </p>
            </div>

            {/* QUANTITY */}
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

            {/* PINCODE CHECK */}
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

            {/* BUTTONS */}
            <div className="hidden md:flex gap-4 mt-6">
              <button className="flex-1 p-4 border-2 border-brand-teal text-brand-teal font-bold rounded-xl">
                Add to Cart
              </button>

              <button
                onClick={() =>
                  navigate(
                    `/payment/${categoryId}/${productId}/${selectedVariant.id}`
                  )
                }
                className="flex-1 p-4 bg-brand-teal text-white font-bold rounded-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BUY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-50">
        <p className="text-lg font-bold">₹{totalPrice.toLocaleString()}</p>
        <button
          onClick={() =>
            navigate(
              `/payment/${categoryId}/${productId}/${selectedVariant.id}`
            )
          }
          className="bg-brand-gold px-6 py-2 rounded-lg font-semibold text-brand-charcoal"
        >
          Buy Now
        </button>
      </div>
    </motion.section>
  );
};

export default BuyNowPage;
