import React from "react";

function Button({ text, onClick }: { text: string; onClick?: any; }) {
  return (
    <button
      type="button"
      className="py-2 px-5 text-base font-medium text-primary/90 focus:outline-none bg-white rounded-lg border border-primary/20 hover:bg-primary/10 hover:text-primary focus:z-10 focus:ring-4 focus:ring-primary/20 "
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
