

import './MiddleSection.css'
import DiseasesCarousel from './components/DiseasesCarousel'
import MarkCuban from './assets/markCuban.webp'
import FactoryIcon from './assets/FactoryIcon.png'
import FifteenIcon from './assets/FifteenIcon.png'
import PackageIcon from './assets/PackageIcon.png'
import StopwatchIcon from './assets/StopwatchIcon.png'
import threeDot from './assets/threeDot.png'

const MiddleSection = () => {
    
    
  return (
   <>
   <div className="container-fluid p-5">
    <div className="row mt-4  markCubanSection">
        <div className="col-12 col-lg-5">
         <img className='img-fluid MarkCubanImg' src={MarkCuban} />
        </div>
        <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
          <p className='MarkCubanQuotes'>"Everyone should have safe, affordable medicines with transparent prices."

          <p className='MarkCubanAuthor  mt-4'>- Mark Cuban</p>
          </p>
        
         </div>
        
    </div>

    <div className='row'>
        <div className='col-12 text-center mt-4'>
            <h1 style={{ color: "rgb(19 55 108)" }}>How Cost Plus Drugs works</h1>
            <p>With all medications listed on our site, you will need to request a new prescription from your U.S.-based provider to place an order.</p>
        </div>
    </div>
   </div>


   {/* Here's exactly how we price your drugs */}

   <div className='container-fluid pb-4' style={{ backgroundColor:" rgb(242 250 253)" }}>
    <div className='row'>
        <div className='col-12 mt-5 text-center'>
            <h1 style={{ color: "rgb(19 55 108)" }}>Here's exactly how we price your drugs</h1>
            <p className='mt-4'  style={{ color: "rgb(19 55 108)" }}>We think you should know how much your medications cost and why. For example, <span className='fw-bold'>a30 count supply of</span></p>
            <span style={{ color: "rgb(19 55 108)" }} className="fw-bold">400mg Imatinib </span><span>will cost:</span>
        </div>

        <div className='row row-no-gutter'>
   <div className='mt-4 p-3 col-12 d-flex justify-content-center'>
<div className='Pricecard p-3 '>   

    <div className='d-flex justify-content-between'>
        <h4 style={{ color: "rgb(19 55 108)" }}>Your drug cost with us</h4>
        <h4 style={{ color: "#ff6b6b " }}>$20.00</h4>

    </div>
    <div className='text-center SavePrice mt-2'><p className='SavePricePara pt-1'>You save $9,622.80 on your medication</p></div>

    <div className='d-flex justify-content-between mt-2'>
        <h4 style={{ color: "rgb(19 55 108)" }}>Retail price at other companies</h4>
        <h4 style={{ color: "#ff6b6b " }}>$20.00</h4>

    </div>
</div>


   </div>
   <div className='text-center'>  <p className='fst-italic'  style={{ color: "rgb(19 55 108)" }}>Your final cost will include shipping and taxes, which vary by location.</p></div>
 
        </div>
    </div>



    {/* Icons */}

    <div className="container">
  <div className="row mt-5">
    <div className="col-lg-3 col-6 d-flex flex-column justify-content-center align-items-center">
      <img src={FactoryIcon} alt="Factory" />
      <p>Manufacturing</p>
      <h5>$25.65</h5>
    </div>

    <div className="col-lg-3 col-6 d-flex flex-column justify-content-center align-items-center">
      <img src={FifteenIcon} alt="Fifteen" />
      <p> 15% Markup</p>
      <h5> $3.85</h5>
     
     
    </div>

    <div className="col-lg-3 col-6 d-flex flex-column justify-content-center align-items-center">
      <img src={PackageIcon} alt="Package" />
      <p>Shipping</p>
      <h5>$25.65</h5>
    </div>

    <div className="col-lg-3 col-6 d-flex flex-column justify-content-center align-items-center">
      <img src={StopwatchIcon} alt="Stopwatch" />
      <p>Pharmacy Labor</p>
      <h5>$25.65</h5>
    </div>
  </div>
</div>

   </div>

   {/* Affordable medication is your right. */}

   <div className='container'>
    <div className='row'>
    <div className='col-12 mt-5 text-center'>
            <h1 style={{ color: "rgb(19 55 108)" }}>Affordable medication is your right.</h1>
            <p className='mt-4'  style={{ color: "rgb(19 55 108)" }}>At Mark Cuban Cost Plus Drug Company, we offer hundreds of common (and often life-saving) medications</p>
            <p style={{ color: "rgb(19 55 108)" }}> at the lowest possible prices</p>
        </div>

        </div>
            <DiseasesCarousel />
    </div>


   </>
  )
}

export default MiddleSection