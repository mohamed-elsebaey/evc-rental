"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image: string | any;
  badge?: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
  createdAt?: Date;
  popularity?: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showQuickLookTooltip, setShowQuickLookTooltip] = useState(false);
  const [showFavoritesTooltip, setShowFavoritesTooltip] = useState(false);

  const renderRatingStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`h-4 w-4 ${
          index < product.rating ? "text-yellow-400" : "text-gray-300"
        }`}
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
      </svg>
    ));
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full flex justify-center items-center">
        <Link href="#">
          <Image
            width={200}
            height={200}
            className=""
            src={product.image}
            alt={product.title}
          />
        </Link>
      </div>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          {product.badge && (
            <span className="me-2 rounded bg-background2/70 px-2.5 py-0.5 text-xs font-medium text-primary-800">
              {product.badge}
            </span>
          )}

          <div className="flex items-center justify-end gap-1">
            {/* Quick Look Button */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowQuickLookTooltip(true)}
                onMouseLeave={() => setShowQuickLookTooltip(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 "
              >
                <span className="sr-only">Quick look</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>

              {showQuickLookTooltip && (
                <div className="absolute top-full right-0 z-10 mt-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm ">
                  Quick look
                  <div className="tooltip-arrow" />
                </div>
              )}
            </div>

            {/* Favorites Button */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowFavoritesTooltip(true)}
                onMouseLeave={() => setShowFavoritesTooltip(false)}
                onClick={() => setIsLiked(!isLiked)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 "
              >
                <span className="sr-only">Add to Favorites</span>
                <svg
                  className={`h-5 w-5 ${isLiked ? "text-red-500" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isLiked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </button>

              {showFavoritesTooltip && (
                <div className="absolute top-full right-0 z-10 mt-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm ">
                  Add to favorites
                  <div className="tooltip-arrow" />
                </div>
              )}
            </div>
          </div>
        </div>

        <Link href="#">
          <h2 className="h-16 text-lg font-semibold leading-tight text-gray-900 hover:underline">
            {product.title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">{renderRatingStars()}</div>
          <p className="text-sm font-medium text-gray-900 ">
            {product.rating.toFixed(1)}
          </p>
          <p className="text-sm font-medium text-gray-500 ">
            ({product.reviews})
          </p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {feature.icon === "delivery" ? (
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                ) : (
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                )}
              </svg>
              <p className="text-sm font-medium text-gray-500 ">
                {feature.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 ">
            {product.price}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
