import { ReactNode } from "react";
import styles from "./Input.module.css";

interface CustomSelectProps<T> {
  required?: boolean;

  label?: string;
  name?: string;
  options: T[];
  value?: T;
  getOptionLabel?: (data: T) => string;
  renderOption?: (data: T) => ReactNode | undefined;

  onSelectOption?: (value: T) => void;
  [key: string]: unknown;
}
function InputSelect<T>({
  getOptionLabel,
  value,
  options,
  renderOption,
  ...props
}: CustomSelectProps<T>) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.label}>
        {props.label}
        {props?.required ? <span className={styles.required}>*</span> : null}
      </div>
      <select
        {...props}
        value={getOptionLabel?.(value as T) ?? (value as string)}
        className={styles.input}
      >
        {options?.map((option, index: number) => (
          <option
            value={getOptionLabel?.(option) ?? (option as string)}
            key={index}
          >
            {renderOption?.(option) ?? (option as ReactNode)}
          </option>
        ))}
      </select>
    </div>
  );
}

export { InputSelect };
