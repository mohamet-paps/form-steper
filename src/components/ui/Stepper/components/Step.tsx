import { ReactNode, useMemo } from "react";
import styles from "./Step.module.css";
type StepProps = {
  step?: number;
  currentStep?: number;
  children: ReactNode | string;
};
function Step({ step = 0, currentStep = 0, children }: StepProps) {
  const [activeLabelBg, activeCount] = useMemo(() => {
    if (step === currentStep) {
      return [styles.activeStepperLabel, styles.activeCount];
    } else if (step < currentStep) {
      return [styles.alredyacivedStepperLabel, styles.activeCount];
    }
    return [styles.stepperLabel, styles.count];
  }, [step, currentStep]);

  return (
    <div className={styles.root}>
      <div className={styles.stepperLine}></div>
      <div className={activeLabelBg}>
        <span className={activeCount}>{step! + 1}</span>
        <span className={styles.label}>{children}</span>
      </div>
    </div>
  );
}

export default Step;
