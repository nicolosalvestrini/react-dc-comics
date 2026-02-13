import  Footer  from "./components/Footer";
import  Main  from "./components/Main";
import  Header  from "./components/Header";
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
     
    </>
  )
}

export default App
