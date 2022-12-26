import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='Container'>

      <Component {...pageProps} />
      
    </div>
  )
}
