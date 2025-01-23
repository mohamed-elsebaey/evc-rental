import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full cursor-pointer rounded-md border border-background3 bg-background3 py-2 px-4 text-base font-medium text-white transition hover:bg-opacity-90"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="w-full flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          Loading...
        </div>
      ) : (
        `${text}`
      )}
    </button>
  );
}
