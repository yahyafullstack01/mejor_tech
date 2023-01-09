import Navbar from "../components/Navbar/navbar";
import Intro from "../components/Introduction/intro";
import About from "../components/About_us/about";
import Team from "../components/Meet_team/team";
import Footer from "../components/Footer/footer";
import { AppContext } from "../Mycontext/context";
import { useState } from "react";

export default function Home() {
  const [side, setside] = useState(false);
  const [side2, setside2] = useState(false);
  const [side3, setside3] = useState(false); 
  const [side4, setside4] = useState(false);
  const [side5, setside5] = useState(false);
  const [side6, setside6] = useState(false);

  const flip = () => setside(!side);
  const flip2 = () => setside2(!side2);
  const flip3 = () => setside3(!side3);
  const flip4 = () => setside4(!side4);
  const flip5 = () => setside5(!side5);
  const flip6 = () => setside6(!side6);



  return (

    <AppContext.Provider value={{ side, side2, side3, side4, side5, side6, flip, flip2, flip3, flip4, flip5, flip6 }}>
      <div className="">
        <Navbar />
        <Intro />
        <About />
        <Team />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}
