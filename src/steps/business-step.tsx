import Input from "../components/ui/Input";
import { InputSelect } from "../components/ui/Input/input-select";
import Row from "../components/ui/Row";
import { useRegisterForm } from "../contexts/register-form";

import styles from "./Business.module.css";

function BusinessStep() {
  const { handleSetFormValue, formValue } = useRegisterForm();
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.stepInfos}>Step 2</h3>
        <h2 className={styles.brandTitle}>Business Information</h2>
        <p className={styles.infosHeader}>
          Please, enter information about your company.
        </p>
      </div>
      <div className={styles.section} onChange={handleSetFormValue}>
        <h2 className={styles.title}>General information</h2>
        <Row>
          <Input
            label="Brand Name"
            placeholder="Input your Brand Name"
            required
            name="brandName"
            value={formValue.brandName}
          />
          <InputSelect
            required
            label="Brand Type"
            options={["Brand1", "Brand2"]}
            value={formValue.brandType}
            name="brandType"
          />
        </Row>
        <Row>
          <Input
            label="Street Address"
            placeholder="Input your Street Address"
            required
            name="address"
            value={formValue.address}
          />
          <Input
            label="City"
            placeholder="Input your City"
            required
            name="city"
            value={formValue.city}
          />
        </Row>
        <Row>
          <Input
            label="Zip Code"
            placeholder="Input your Zip Code"
            required
            name="taxId"
          />
          <Input
            label="Tax ID Number"
            placeholder="input Tax ID Number"
            required
            name="taxId"
            value={formValue.taxId}
          />
        </Row>
      </div>
      {/* Documents */}
      <div className={styles.section}>
        <h2 className={styles.title}>Documents</h2>
        <p className={styles.infos}>
          Once the followings documents are signed, you'lle be ready to get
          started
        </p>
        <div>
          <Input />
          <Input />
        </div>
      </div>

      {/* COI Upload */}
      <div className={styles.section}>
        <h2 className={styles.title}>COI PDF Upload</h2>
        <Input />
      </div>
    </div>
  );
}

export default BusinessStep;
