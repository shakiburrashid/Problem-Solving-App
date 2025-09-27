import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Pages/About/About"
import FAQ from "./Pages/FAQ/FAQ"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Banner from "./Components/Banner/Banner"

function App() {

  return (
    <>
      <BrowserRouter>


        {/* <Navbar /> */}

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         */}
        <section className="px-10 py-10 font-roboto">
          {/* <Banner/> */}

          <div>
            <div className="border px-10 py-5 w-150 h-70 rounded-md">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl">Lorem ipsum dolor sit amet.</h1>
                <div className="flex gap-3 items-center bg-green-200 h-8 w-25 rounded-2xl p-2">
                  <i className="fa-solid fa-circle text-green-500"></i>
                  <h1 className="text-green-600">Open</h1>
                </div>
              </div>
              <div className="mt-5">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus enim sunt hic numquam veniam ullam accusantium inventore sint, repellat sed.</p>
                <div className="flex mt-5 justify-between items-center">
                  <div className="flex gap-5">
                    <p>1051</p>
                    <h3><span>HIGH</span> PRIORITY</h3>
                  </div>
                  <div className="flex gap-5">
                    <h2>Name</h2>
                    <i className="fa-solid fa-calendar"></i>
                    <h1>10/5/2025</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>














        </section>
      </BrowserRouter>

    </>
  )
}

export default App
