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
    const labelClasses = clsx(styles["custom-label"], styles["font-lablel-m"], {
      [styles["custom-label-warning"]]: variant === "warning",
      [styles["custom-label-error"]]: variant === "error",
    });

    const inputClasses = clsx(styles["custom-input"], {
      [styles["custom-input-warning"]]: variant === "warning",
      [styles["custom-input-error"]]: variant === "error",
    });

    return (
      <div className={styles.container}>
        <label htmlFor={props.id} className={labelClasses}>
          {props.label}
          {secondaryLabel && (
            <span className={styles["font-label-s"]}>{secondaryLabel}</span>
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
