import "../app/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="selection:nx-bg-pink-400 dark:selection:nx-bg-black-100">
      <Component {...pageProps} />
    </div>
  )
}