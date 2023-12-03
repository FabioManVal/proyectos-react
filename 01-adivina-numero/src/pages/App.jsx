import { useState } from "react";
import { OffCanvas } from "../components/OffCanvas";
import reactLogo from "./../assets/svg/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [randomNumber, setRandomNumber] = useState("");

  const addRandomNumber = (number) => {
    console.log(number);
    setRandomNumber(number);
  };

  return (
    <>
      <OffCanvas returnRandomNumber={addRandomNumber}></OffCanvas>
      <h1>{randomNumber}</h1>
    </>
  );
}

export default App;
