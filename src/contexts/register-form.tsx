import { createContext, useContext, useState } from "react";

interface RegisterContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValue: any;
  handleSetFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RegisterContext = createContext<RegisterContextProps>({
  formValue: undefined,
  handleSetFormValue: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const useRegisterForm = () => useContext(RegisterContext);

interface RegisterContextProviderProps {
  children: React.ReactNode;
}
export const RegisterContextProvider = ({
  children,
}: RegisterContextProviderProps) => {
  const [formValue, setFormValue] = useState({});
  const handleSetFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <RegisterContext.Provider value={{ handleSetFormValue, formValue }}>
      {children}
    </RegisterContext.Provider>
  );
};
