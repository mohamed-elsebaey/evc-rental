"use client";

import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

import image1 from "@/public/productImages/ARRI ALEXA Mini LF Premium Gold Mount Kit.png";
import image2 from "@/public/productImages/Canon 5D Mark IV.png";
import image3 from "@/public/productImages/Canon CR-N500 PTZ 3-Camera and Controller Kit.png";
import image4 from "@/public/productImages/Canon EOS R6 Mark II.png";
import image5 from "@/public/productImages/DJI Inspire 3 Premium Kit.png";
import image6 from "@/public/productImages/DJI Mavic 3 Cine Premium Combo.png";
import image7 from "@/public/productImages/Fuji X-H2S Content Creator Starter Kit.png";
import image8 from "@/public/productImages/LINK 800WS and Celestial 2-Light Studio Kit for Canon.png";
import image9 from "@/public/productImages/Profoto B10X Plus OCF 2-Light Flash Kit.png";
import image10 from "@/public/productImages/Sony PXW-Z190 Event Package.png";
import image11 from "@/public/productImages/Sony PXW-Z90V 4K Event Package.png";
import image12 from "@/public/productImages/Zoom Q8n-4K Handy Video Recorder.png";
import OutsideClickHandler from "react-outside-click-handler";

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

const products: Product[] = [
  {
    title: "ARRI ALEXA Mini LF Premium Gold Mount Kit",
    price: "$1,699",
    rating: 5,
    reviews: 455,
    image: image1,
    badge: "Up to 35% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2023-01-15"),
    popularity: 95,
  },
  {
    title: "Canon 5D Mark IV",
    price: "$1,199",
    rating: 4.9,
    reviews: 1233,
    image: image2,
    badge: "Up to 15% off",
    features: [
      { icon: "best-seller", text: "Best Seller" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2023-02-25"),
    popularity: 74,
  },
  {
    title: "Canon CR-N500 PTZ 3-Camera and Controller Kit",
    price: "$799",
    rating: 4.9,
    reviews: 879,
    image: image3,
    badge: "Up to 35% off",
    features: [
      { icon: "delivery", text: "Shipping Today" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2024-07-5"),
    popularity: 20,
  },
  {
    title: "Canon EOS R6 Mark II",
    price: "$499",
    rating: 4.8,
    reviews: 2957,
    image: image4,

    badge: "Up to 10% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2025-01-9"),
    popularity: 120,
  },
  {
    title: "DJI Inspire 3 Premium Kit",
    price: "$499",
    rating: 4.8,
    reviews: 4263,
    image: image5,
    badge: "Up to 10% off",
    features: [
      { icon: "best-seller", text: "Best Seller" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2023-08-17"),
    popularity: 40,
  },
  {
    title: "DJI Mavic 3 Cine Premium Combo",
    price: "$2,599",
    rating: 4.9,
    reviews: 1076,
    image: image6,
    badge: "Up to 5% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2024-09-21"),
    popularity: 60,
  },
  {
    title: "Fuji X-H2S Content Creator Starter Kit",
    price: "$699",
    rating: 4.7,
    reviews: 387,
    image: image7,
    badge: "Up to 20% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2023-01-18"),
    popularity: 95,
  },
  {
    title: "LINK 800WS and Celestial 2-Light Studio Kit for Canon",
    price: "$89",
    rating: 4.9,
    reviews: 4775,
    image: image8,
    badge: "Up to 25% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2025-01-23"),
    popularity: 92,
  },
  {
    title: "Profoto B10X Plus OCF 2-Light Flash Kit",
    price: "$129",
    rating: 4.7,
    reviews: 4775,
    image: image9,
    badge: "Up to 35% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2025-01-24"),
    popularity: 86,
  },
  {
    title: "Sony PXW-Z190 Event Package",
    price: "$1780",
    rating: 4.0,
    reviews: 475,
    image: image10,
    badge: "Up to 35% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2025-01-1"),
    popularity: 95,
  },
  {
    title: "Sony PXW-Z90V 4K Event Package",
    price: "$1290",
    rating: 4.7,
    reviews: 475,
    image: image11,
    badge: "Up to 35% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2024-12-15"),
    popularity: 42,
  },
  {
    title: "Zoom Q8n-4K Handy Video Recorder",
    price: "$170",
    rating: 4.9,
    reviews: 475,
    image: image12,
    badge: "Up to 35% off",
    features: [
      { icon: "delivery", text: "Fast Delivery" },
      { icon: "price", text: "Best Price" },
    ],
    createdAt: new Date("2025-01-01"),
    popularity: 62,
  },
];

//   **************************************************************************************************************
//   **************************************************************************************************************
//   **************************************************************************************************************

// Helper function to extract discount percentage
const getDiscountPercentage = (badge: string | undefined): number => {
  if (!badge) return 0;
  const match = badge.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

export default function Products() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortButtonSelectedFilter, setSortButtonSelectedFilter] =
    useState("most-popular");

  // Sort products based on selected filter
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortButtonSelectedFilter) {
        case "newest":
          return (
            new Date(b?.createdAt || 0).getTime() -
            new Date(a?.createdAt || 0).getTime()
          );
        case "price-asc":
          return (
            parseFloat(a?.price.replace(/[^0-9.]/g, "") || "0") -
            parseFloat(b?.price.replace(/[^0-9.]/g, "") || "0")
          );
        case "price-desc":
          return (
            parseFloat(b?.price.replace(/[^0-9.]/g, "") || "0") -
            parseFloat(a?.price.replace(/[^0-9.]/g, "") || "0")
          );
        case "reviews":
          return (b?.reviews || 0) - (a?.reviews || 0);
        case "discount":
          return (
            getDiscountPercentage(b?.badge) - getDiscountPercentage(a?.badge)
          );
        default:
          return (b?.popularity || 0) - (a?.popularity || 0);
      }
    });
  }, [sortButtonSelectedFilter]);

  const handleSortButtonFilterSelect = (filter: string) => {
    setSortButtonSelectedFilter(filter);
    setIsSortOpen(false);
  };
  return (
    <>
      <section className="bg-gray-50 md:py-20">
        <div className="container">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              {/* **************************************************************************************************** */}
              {/* Page Nav Start > > > */}
              {/* **************************************************************************************************** */}
              <nav className="flex">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600  "
                    >
                      <svg
                        className="me-2.5 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 rtl:rotate-180"
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
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600   md:ms-2"
                      >
                        Products
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
              {/* **************************************************************************************************** */}
              {/* Page Nav End > > > */}
              {/* **************************************************************************************************** */}
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                Products
              </h2>
            </div>
            {/* **************************************************************************************************** */}
            <div className="flex items-center space-x-4">
              <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto">
                <svg
                  className="-ms-0.5 me-2 h-4 w-4"
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
                    strokeWidth="2"
                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
                </svg>
                Filters
                <svg
                  className="-me-0.5 ms-2 h-4 w-4"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100       sm:w-auto"
                >
                  <svg
                    className="-ms-0.5 me-2 h-4 w-4"
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
                      d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                    />
                  </svg>
                  Sort
                  <svg
                    className="-me-0.5 ms-2 h-4 w-4"
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
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* **************************************************************************************************** */}
                {/* **************************************************************************************************** */}
                <OutsideClickHandler
                  onOutsideClick={() => {
                    return isSortOpen && setIsSortOpen(!isSortOpen);
                  }}
                >
                  <div
                    className={`z-20 ${
                      isSortOpen ? "block" : "hidden"
                    } absolute top-12 right-0 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow`}
                  >
                    <ul className="p-2 text-left text-sm font-medium text-gray-500">
                      {[
                        ["most-popular", "The most popular"],
                        ["newest", "Newest"],
                        ["price-asc", "Increasing price"],
                        ["price-desc", "Decreasing price"],
                        ["reviews", "No. reviews"],
                        ["discount", "Discount %"],
                      ].map(([value, label]) => (
                        <li key={value}>
                          <button
                            onClick={() => handleSortButtonFilterSelect(value)}
                            className={`w-full rounded-md px-3 py-2 text-left ${
                              sortButtonSelectedFilter === value
                                ? "bg-gray-100 text-gray-900"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </OutsideClickHandler>
                {/* **************************************************************************************************** */}
                {/* **************************************************************************************************** */}
                {/* **************************************************************************************************** */}
              </div>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 xl:grid-cols-3">
            {sortedProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={{
                  ...product,
                }}
              />
            ))}
          </div>
          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100      "
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
