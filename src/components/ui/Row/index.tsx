import { PropsWithChildren } from "react";
import styles from "./Row.module.css";

interface RowProps extends PropsWithChildren {}
function Row({ children }: RowProps) {
  return <div className={styles.row}>{children}</div>;
}

export default Row;
