import Link from "next/link"
import { VT323 } from "next/font/google"

const pixelFont = VT323({
  weight: ["400"],
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border border-teal-500 opacity-20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-purple-500 opacity-20 animate-pulse"></div>

      <div className="max-w-2xl w-full mx-auto space-y-12 z-10">
        <section>
          <div className="inline-block mb-2 px-2 py-1 bg-gradient-to-r from-purple-900/30 to-teal-900/30 border-l-2 border-teal-500">
            <span className="text-xs text-teal-400">v1.0.0</span>
          </div>
          <h1 className={`${pixelFont.className} text-3xl md:text-4xl tracking-wider uppercase mb-6 logo-animated`}>
            No Rules Software
          </h1>
          <p className="text-lg text-zinc-400 glitch-subtle">
            High-quality software products built in Spain by Monika & Marcel Fahle.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className={`${pixelFont.className} text-xl mb-3 text-teal-400`}>Products</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://boldvideo.io"
                  className="text-base relative inline-block transition-colors duration-300 product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="product-link-bg"></span>
                  <span className="product-link-text">Bold Video</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.pidro.online"
                  className="text-base relative inline-block transition-colors duration-300 product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="product-link-bg"></span>
                  <span className="product-link-text">Pidro</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="contact-container">
            <Link href="mailto:hello@norulessoft.com" className="contact-email">
              hello@norulessoft.com
            </Link>
          </div>
        </section>

        <footer className="pt-8 text-xs text-zinc-600">
          <p className="retro-footer">© {new Date().getFullYear()} // SYSTEM OK</p>
        </footer>
      </div>
    </main>
  )
}
