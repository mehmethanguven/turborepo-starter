import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'

export default function Web() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}
