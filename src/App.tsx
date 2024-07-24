import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import AddTransaction from "./pages/Addtransaction";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddTransaction />} />
      </Routes>
    </>
  );
};

export default App;
