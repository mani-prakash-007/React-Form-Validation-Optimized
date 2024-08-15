import { SignupForm } from "./components/Form/SignupForm";
function App() {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-center">Form Validation</h1>
        <div className="flex justify-center mt-10">
          <div className="border border-black w-96 pl-10 rounded-xl shadow-inner shadow-black bg-white min-h-80">
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
