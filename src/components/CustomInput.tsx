import { forwardRef } from "react";
import styles from "./CustomInput.module.css";
import clsx from "clsx";

export interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "warning" | "error";
  label?: string;
  secondaryLabel?: string;
  id: string;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type, secondaryLabel, variant = "default", ...props }, ref) => {
    const labelClasses = clsx(styles["label"], styles["label-main"], {
      [styles["label-warning"]]: variant === "warning",
      [styles["label-error"]]: variant === "error",
    });

    const inputClasses = clsx(styles["input"], {
      [styles["input-warning"]]: variant === "warning",
      [styles["input-error"]]: variant === "error",
    });

    return (
        <label htmlFor={props.id} className={labelClasses}>
      <div className={styles["container"]}>
          {props.label}
          {secondaryLabel && (
            <span className={styles["label-secondary"]}>{secondaryLabel}</span>
          )}
        </label>
        <input
          className={inputClasses}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

export default CustomInput;
