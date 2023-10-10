import Input from "../components/ui/Input";
import Row from "../components/ui/Row";
import { useRegisterForm } from "../contexts/register-form";

import styles from "./Profile.module.css";

function ProfileStep() {
  const { handleSetFormValue, formValue } = useRegisterForm();
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.stepInfos}>Step 1</h3>
        <h2 className={styles.title}>Your Profile </h2>
        <p className={styles.infos}>
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </p>
      </div>
      <div className={styles.section} onChange={handleSetFormValue}>
        <Row>
          <Input
            label="Fisrt Name"
            name="firstname"
            placeholder="Input your Fisrt Name"
            required
            value={formValue.firstname}
          />
          <Input
            label="Last Name"
            name="lastname"
            placeholder="Input your Last Name"
            required
            value={formValue.lastname}
          />
        </Row>
        <Row>
          <Input
            label="Email"
            name="email"
            placeholder="Input your Email"
            type="email"
            required
            value={formValue.email}
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            placeholder="Input your Phone Number"
            required
            value={formValue.phoneNumber}
          />
        </Row>
        <Row>
          <Input
            label="Password"
            placeholder="Input your Password"
            name="password"
            required
            value={formValue.password}
          />
          <Input
            label="Confirm Password"
            name="c_password"
            placeholder="Confirm your Password"
            required
            value={formValue.c_password}
          />
        </Row>
      </div>
    </div>
  );
}

export default ProfileStep;
