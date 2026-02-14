import  MainDown  from "./components/Main-down";
import  MainUP  from "./components/Main-up";
import  Header  from "./components/Header";
import  FooterUP  from "./components/Footer-up";
import  FooterDown  from "./components/Footer-down";
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainUP />
      <MainDown />
      <FooterUP />
      <FooterDown />
     
    </>
  )
}

export default App
