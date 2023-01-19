import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";

interface MyButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
}

export default function Button({
  type,
  children,
  className,
  ...rest
}: MyButtonProps) {
  return (
    <div>
      <button
        {...rest}
        type={type}
        className={`my-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
