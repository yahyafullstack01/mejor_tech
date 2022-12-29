import Head from "../Html/html";
import Navbar from "../components/Navbar/navbar";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="Container">
      <Head />
      <Component {...pageProps} />
    </div>
  )
}
