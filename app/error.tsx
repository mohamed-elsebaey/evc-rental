"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  function handleReset() {
    startTransition(() => {
      reset();
      router.refresh();
    });
  }

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-[180px]">
      <h2 className="text-2xl font-bold mb-4">Error loading page!</h2>
      <p className="py-10 text-red-500 max-w-2xl text-center">{error.message}</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        onClick={handleReset}
      >
        Try again
      </button>
    </div>
  );
}
