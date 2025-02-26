import { forwardRef } from "react";
import styles from "./CustomInput.module.css";
import clsx from "clsx";

export type InputType = React.ComponentProps<"input">["type"];

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "id" | "type"> {
  id: string;
  label: string;
  value?: string;
  type?: InputType;
  errorMessage?: string;
  secondaryLabel?: string;
  variant?: "default" | "warning" | "error";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = "text",
      secondaryLabel,
      variant = "default",
      value,
      onChange,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const labelClasses = clsx(styles["label"], styles["label-main"], {
      [styles["label-warning"]]: variant === "warning",
      [styles["label-error"]]: variant === "error",
    });

    const inputClasses = clsx(styles["input"], {
      [styles["input-warning"]]: variant === "warning",
      [styles["input-error"]]: variant === "error",
    });

    const errorId = `${id}-error`;

    return (
      <div className={styles["container"]}>
        <label htmlFor={id} className={labelClasses}>
          {props.label}
          {secondaryLabel && (
            <span className={styles["label-secondary"]}>{secondaryLabel}</span>
          )}
        </label>
        <input
          id={id}
          className={inputClasses}
          type={type}
          ref={ref}
          value={value}
          onChange={onChange}
          aria-invalid={variant === "error"}
          aria-describedby={
            errorMessage && variant === "error" ? errorId : undefined
          }
          {...props}
        />
        {errorMessage && variant === "error" && (
          <div id={errorId} className={styles["error-message"]}>
            {errorMessage}
          </div>
        )}
      </div>
    );
  },
);

export default CustomInput;
