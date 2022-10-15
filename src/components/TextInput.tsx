import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <div className="py-4 px-3 rounded bg-gray-800 w-full text-gray-100 outline-none text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300">
      <input className={clsx("")} {...props} />
    </div>
  );
}
