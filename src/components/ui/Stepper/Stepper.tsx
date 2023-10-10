import { Children, cloneElement } from "react";
import styles from "./Stepper.module.css";
export type StepperProps = {
  children?: JSX.Element[] | JSX.Element;
  activeStep: number;
};

function Stepper({ activeStep, children, ...props }: StepperProps) {
  const allChildren = Children.toArray(children);
  return (
    <div className={styles.stepper}>
      {Children.map(allChildren, (elem, index) => {
        const Step = cloneElement(elem as JSX.Element, {
          currentStep: activeStep,
          step: index,
          ...props,
        });
        return Step;
      })}
    </div>
  );
}

export default Stepper;
