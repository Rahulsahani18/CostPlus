import Header from './components/header'
import Home from './Home'
import MiddleSection from './MiddleSection'
import MiddleSection2 from './MiddleSection2'
import FAQ from './FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
    <>
    <div className='HomeSectionColor'>
         <Header />
         <Home />
    </div>
   <MiddleSection />
   <MiddleSection2 />
   <FAQ />
    <Footer />
   </>
  )
}

export default App
