import "./App.css";
import RegisterForm from "./components/register-form";
import { RegisterContextProvider } from "./contexts/register-form";

function App() {
  return (
    <div className="root">
      <RegisterContextProvider>
        <RegisterForm />
      </RegisterContextProvider>
    </div>
  );
}

export default App;
