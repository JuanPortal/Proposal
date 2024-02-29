import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Services } from "./Services"
import { Gallery } from "./Gallery"
import { Contact } from "./Contact"

function Template() {

  return (
    <>
      <h1>Template</h1>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default Template
