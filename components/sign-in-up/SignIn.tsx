"use client";
import Link from "next/link";
import logo from "@/public/logo/logo.png";
import fullLogo from "@/public/images/camera.png";
import Image from "next/image";

import { useActionState, useEffect, useState } from "react";
import { signInFormAction } from "@/actions/signInAction";

import SubmitButton from "@/ui/SubmitButton";
import InputFelid from "@/ui/InputFelid";

import { signIn } from "next-auth/react";

function SignIn() {
  const [formState, formAction] = useActionState(signInFormAction, null);
  const [formStateType, setFormStateType] = useState<any>({});

  const [googleLinkDisabled, setGoogleLinkDisabled] = useState(false);

  useEffect(() => {
    setFormStateType(formState);
  }, [formState]);

  const onChangHandler = () => {
    setFormStateType({});
  };
  return (
    // <div className="relative bg-primary/80 bg-bg-2">
    <div className="relative bg-bg-2">
      <svg
        className="absolute inset-x-0 -bottom-1 text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        ></path>
      </svg>
      <div className="relative container overflow-hidden px-4 py-16">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="max-md:order-1 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <Image
              src={fullLogo}
              width={350}
              height={350}
              className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
              alt="login-image"
              loading="lazy"
            />
          </div>
          <div className="w-full md:min-w-[350px] max-w-lg">
            <div className="overflow-hidden rounded-xl border-1 border-gray-600 bg-white p-7 shadow-lg shadow-gray-300 sm:p-10">
              <div className="mb-5 text-center ">
                <div className="flex flex-col items-center justify-center gap-1 text-background font-mono">
                  <span className="relative border-[1px] border-gray-400 w-full my-6" />
                  <Image
                    src={logo}
                    alt="GT"
                    width={70}
                    className="absolute bg-white"
                  />
                </div>
              </div>
              <form action={formAction}>
                <div className="mb-6">
                  <InputFelid
                    label="E-mail"
                    name="email"
                    placeholder="Enter your Email"
                    type="text"
                    onChange={onChangHandler}
                    required
                    errorStyle={formStateType?.errors?.email}
                  />
                  {formStateType?.errors?.email && (
                    <h1 className="text-red-500 absolute">
                      {formStateType.errors["email"]}
                    </h1>
                  )}
                </div>
                <div className="mb-6">
                  <InputFelid
                    label="Password"
                    name="password"
                    placeholder="Enter your Password"
                    type="password"
                    onChange={onChangHandler}
                    errorStyle={formStateType?.errors?.password}
                    required
                  />
                  {formStateType?.errors?.password && (
                    <h1 className="text-red-500 absolute">
                      {formStateType?.errors["password"]}
                    </h1>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-gray-800 ml-3 block text-sm"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link
                    href="#"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="mt-8 mb-2 sm:mb-4">
                  <SubmitButton text="Sign In" />
                </div>

                <p className="text-sm text-center mt-6">
                  Don&apos;t have an account{" "}
                  <button
                    disabled={googleLinkDisabled}
                    onClick={() => {
                      signIn("google");
                      setGoogleLinkDisabled(true);
                    }}
                    className={`text-primary font-semibold hover:underline ml-1 whitespace-nowrap ${
                      googleLinkDisabled ? "cursor-not-allowed" : ""
                    }`}
                  >
                    Register here
                  </button>
                </p>
                {/* *************** */}
                <hr className="my-6 border-gray-300" />

                <div className="space-x-6 flex justify-center">
                  <button
                    disabled={googleLinkDisabled}
                    type="button"
                    className={`flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                      googleLinkDisabled ? "cursor-not-allowed" : ""
                    }`}
                    onClick={() => {
                      signIn("google");
                      setGoogleLinkDisabled(true);
                    }}
                  >
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
