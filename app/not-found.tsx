import React from "react";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Oops! That page can’t be found.",
};

function notfound() {
  return (
    // Error 404 Section Start
    <section className="relative z-10 bg-primary/80 py-[220px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                404
              </h2>
              
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                Oops! That page can’t be found
              </h4>
             
              <p className="mb-8 text-lg text-white">
                The page you are looking for it maybe deleted
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  Error 404 Section End );
  );
}

export default notfound;
