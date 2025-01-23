import SignIn from "@/components/sign-in-up/SignIn";
import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description: "",
  alternates: {
    // canonical: "https://www.alpha-herbs.com/sign-in",
  },
};

async function page() {
  const sessionData = await getSession();
  if (sessionData) {
    redirect("/");
  }
  return (
    <>
      <SignIn />
    </>
  );
}

export default page;
