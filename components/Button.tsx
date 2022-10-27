import Link from "next/link";
import { CSSProperties, HTMLAttributes, ReactElement } from "react";

function Button({
  text = "Button",
  padding = "px-6 py-1",
  disable = false,
  colors = `text-white ${disable ? "bg-blue-600/70" : "bg-blue-600"}`,
  margin = "",
  className = "",
  type = "button",
  href = null,
  children,
  style,
  cursor,
  onClick,
}: Partial<ButtonType>) {
  const cls = `${colors} ${padding} ${margin} ${cursor}  rounded-md flex justify-center items-center gap-1 ${className}`;
  return href ? (
    <Link href={href}>
      <a className={cls}>{text}</a>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={cls}
      type={type}
      disabled={disable}
      style={style}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;

interface ButtonType extends HTMLAttributes<ButtonType> {
  text: string;
  padding?: string;
  colors: string;
  margin?: string;
  className?: string;
  href?: string | null;
  disable: any;
  children: ReactElement;
  type?: "submit" | "reset" | "button";
  style?: CSSProperties;
  cursor?: string;
  onClick: () => void;
}
