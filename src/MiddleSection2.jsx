
import Women from './assets/woman-scarf.png'
import './MiddleSection2.css'
const MiddleSection2 = () => {
  return (
    <>
    <div className="container-fluid mt-5">
     <div className="row mt-4" style={{ backgroundColor: "rgb(19 55 108)" }}>
        <div className="col-lg-6 col-12">
       <div className='container mt-4'>
        <h1 className='text-light'>We offer safe, affordable medicines at the lowest possible price.</h1>
       
       <div className='d-flex justify-content-start align-items-center'>
       <div className='circle mt-5'></div><h5 className='text-light mt-5 ms-3'>Find and afford the drugs you need</h5>
      
       </div>

       <div className='d-flex justify-content-start align-items-center'>
       <div className='circle mt-5'></div><h5 className='text-light mt-5 ms-3'>Know what your medication costs</h5>
      
       </div>

       <div className='d-flex justify-content-start align-items-center'>
       <div className='circle mt-5'></div><h5 className='text-light mt-5 ms-3'>Track your order in real time</h5>
      
       </div>
        
       <div className="row mt-5">
        <div className="col-12">
          <button className="btn text-light" style={{backgroundColor: " rgb(240 104 66)"}}>Our Mission</button>
        </div>
      </div>
       
      
       </div>
    
        </div>
        <div className="col-lg-6 col-12">
       <img className='img-fluid' src={Women} />
        </div>
     </div>
    </div>
    </>
  )
}

export default MiddleSection2

