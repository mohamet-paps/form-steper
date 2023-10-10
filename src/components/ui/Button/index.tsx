import React from "react";
import styles from "./Button.module.css";
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}
function Button({ children, startIcon, endIcon, ...props }: ButtonProps) {
  return (
    <div>
      <button className={styles.button} {...props}>
        {endIcon}
        <span>{children}</span>
        {startIcon}
      </button>
    </div>
  );
}

export default Button;
