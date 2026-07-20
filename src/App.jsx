import "./App.css";
import { Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting message="👽👽👽👽" />} />
        <Route
          path="/profile"
          element={<Profile message="My name is Banyar" />}
        />
      </Routes>
    </>
  );
}

export default App;
