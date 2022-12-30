import Navbar from "../components/Navbar/navbar";
import Intro from "../components/Introduction/intro";
import About from "../components/About_us/about";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <About />
      <Footer/>
    </div>
  )
}
