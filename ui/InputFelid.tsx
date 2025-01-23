import { ChangeEventHandler } from "react";

const InputFelid = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  required,
  errorStyle,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  errorStyle?: boolean;
}) => {
  const style = errorStyle
    ? "border-red-500 focus:border-red-500 ring-red-500/50"
    : "border-gray-300 focus:border-background2/40 ring-background2/20";
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 inline-block font-medium text-background"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        className={`relative mb-2 h-12 w-full flex-grow appearance-none rounded border bg-white px-4 shadow-sm transition duration-200  focus:outline-none focus:ring ${style}`}
      />
    </div>
  );
};

export default InputFelid;
