import TopsisForm from "./components/TopsisForm";

export default function App() {
  return (
    <>
      <div className="main-content">
        <div className="container mt-5">
          <h2 className="text-center mb-7">TOPSIS Web Service</h2>
          <TopsisForm />
        </div>
      </div>
    </>
  );
}
