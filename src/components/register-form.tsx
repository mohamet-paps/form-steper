import { useState } from "react";
import BusinessStep from "../steps/business-step";
import ProfileStep from "../steps/profile-step";
import Stepper from "./ui/Stepper/Stepper";
import Button from "./ui/Button";
import Step from "./ui/Stepper/components/Step";

import styles from "./Register.module.css";
import { useRegisterForm } from "../contexts/register-form";

const ViewStep: Record<number, () => JSX.Element> = {
  0: () => <ProfileStep />,
  1: () => <BusinessStep />,
  2: () => (
    <div
      style={{
        height: "500px",
      }}
    >
      Not implemented.
    </div>
  ),
};
function RegisterForm() {
  const steps = ["Your Profile", "Business Information", "Additionals Infos"];

  const [value, setValue] = useState(0);

  const { formValue } = useRegisterForm();

  const handleNextStep = () => {
    if (value == 2) {
      console.log({ formValue });
    } else {
      setValue((prev) => (prev < steps.length ? prev + 1 : prev));
    }
  };
  const handlePrevStep = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className={styles.form}>
      <Stepper activeStep={value}>
        {steps.map((label) => (
          <Step key={label}>{label}</Step>
        ))}
      </Stepper>

      <div className={styles.content}>
        {ViewStep[value]()}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: value > 0 ? "row" : "row-reverse",
          }}
        >
          {value > 0 ? (
            <Button endIcon={<PrevIcon />} onClick={handlePrevStep}>
              Prev Step
            </Button>
          ) : undefined}
          <Button startIcon={<NextIcon />} onClick={handleNextStep}>
            {value < 2 ? "Next Step" : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    height={20}
    width={20}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
const PrevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    height={20}
    width={20}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
