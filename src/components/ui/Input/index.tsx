import styles from "./Input.module.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.label}>
        {label}{" "}
        {props?.required ? <span className={styles.required}>*</span> : null}
      </div>
      <input {...props} className={styles.input} />
    </div>
  );
}

export default Input;
