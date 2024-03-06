import { Route, Routes } from "react-router-dom"
import { Header } from "./Header"
import { Home } from "./Home"
import { Services } from "./Services"
import { Contact } from "./Contact"

function Template() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default Template
