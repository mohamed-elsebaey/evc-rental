"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { AlignJustify, X } from "lucide-react";

import OutsideClickHandler from "react-outside-click-handler";


import logo from "@/public/logo/logo.png";
import Avatar from "./Avatar";

function Header({
  userRole,
  profilePath,
}: {
  userRole: string;
  profilePath: string;
}) {
  const [isListOpen, setIsListOpen] = useState(false);

  const login = userRole ? true : false;

  const openListHandler = () => {
    setIsListOpen(() => !isListOpen);
  };
  const closeListHandler = () => {
    setIsListOpen(() => false);
  };
  return (
    <OutsideClickHandler onOutsideClick={closeListHandler}>
      <div className="bg-gradient-to-r from-[#5d358b] via-[#56358c] to-[#63358d] fixed top-0 left-0 right-0 border-b-2 border-primary/20 z-50">
        <div className="container flex flex-wrap items-center justify-between py-2 text-foreground">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono"
            onClick={closeListHandler}
          >
            <Image src={logo} alt="RVC" width={50} priority={true} />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Rental
            </span>
          </Link>
          {/* *************** List Icon in small devices ************** */}
          <button
            onClick={openListHandler}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            {!isListOpen ? (
              <AlignJustify className="text-primary" />
            ) : (
              <X className="text-red-600" />
            )}
          </button>
          {/* ***************************** */}
          <div
            className={`${
              isListOpen ? "flex" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="w-full font-medium flex flex-col gap-5 md:gap-8 items-center py-4 md:py-0 mt-4 border border-white/5 rounded-lg bg-white/10 md:flex-row  md:mt-0 md:border-0 md:bg-transparent ">
              <NavLink
                label="Home"
                link="/"
                closeListHandler={closeListHandler}
                target={false}
              />
              <NavLink
                label="Pricing"
                link="/pricing"
                closeListHandler={closeListHandler}
                target={false}
              />

              {/* line in Small Devices Start */}
              {login && (
                <li className="border border-primary w-[90%] md:hidden"></li>
              )}
              {/* line in Small Devices End*/}

              <li className="mt-2 md:mt-0">
                {!login ? (
                  <Link
                    href="/sign-in"
                    className="py-2 px-3 rounded bg-background3 hover:scale-105 transition "
                    onClick={closeListHandler}
                  >
                    Sign In
                  </Link>
                ) : (
                  <Avatar
                    userRole={userRole}
                    onClick={closeListHandler}
                    profilePath={profilePath}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}

export default Header;

// ********************************************************

const NavLink = ({
  link,
  label,
  closeListHandler,
  target,
}: {
  link: string;
  label: string;
  closeListHandler: () => void;
  target: boolean;
}) => {
  return (
    <li>
      <Link
        href={link}
        className="py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-background3 md:p-0 "
        onClick={closeListHandler}
        target={target ? "_blank" : ""}
      >
        {label}
      </Link>
    </li>
  );
};
