import  FooterUp  from "./components/Footer-up";
import  Main  from "./components/Main";
import  Header  from "./components/Header";
import  FooterDown  from "./components/Footer-down";
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <FooterUp />
      <FooterDown />
     
    </>
  )
}

export default App
