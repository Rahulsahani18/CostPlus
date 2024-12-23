import '../components/Footer.css'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <div className='container-fluid mt-5'  style={{ backgroundColor: "rgb(19 55 108)" }}>
        
        <div className='row'>
            <div className='col-lg-6 col-12 p-3'>
                <img className='img-fluid FooterLogo' src={Logo} />
            </div>

            <div className='col-lg-6 col-12 p-3'>
                <p className='text-light fw-bold'>
                COST PLUS DRUGS™ offers hundreds of common (and often life-saving) medications at the lowest possible prices.</p>
            </div>
        </div>
{/* Devider */}
        <div className='container-fluid mt-5'>
        <div className='devider'></div>
    </div>

    <div className='row mt-4'>
        <div className='col-lg-6 col-12 '>
            <div className='p-3'>
                <h3 className='text-light'>Stay up to date</h3>
                <p className='text-light '>Subscribe to our newsletter to receive special offers, notifications of new products, and company updates.</p>

            </div>
            <div className="p-3 d-flex align-items-center">
  <label for="exampleFormControlInput1" className="form-label text-light me-2">Email address</label>
  <input 
    type="email" 
    className="form-control me-2" 
    id="exampleFormControlInput1" 
    placeholder="name@example.com" 
    style={{ maxWidth: '300px' }} 
  />
  <button type="submit" className="btn btn-primary">Sign Up</button>
</div>

        </div>
        <div className='col-lg-6 col-12'>
            <div className='row'>
                <div className='col-4'>
                    <p className='text-light fw-bold'>Browse Medications</p>
                    <p className='text-light fw-bold'>Our Missions</p>
                    <p className='text-light fw-bold'>For Providers</p>
                </div>
                <div className='col-4'>
                <p className='text-light fw-bold'>Contact Doctors</p>
                    <p className='text-light fw-bold'>FAQs</p>
                    <p className='text-light fw-bold'>Contact Us</p>
                </div>
                <div className='col-4'>
                <p className='text-light fw-bold'>Privacy Policy</p>
                    <p className='text-light fw-bold'>HIPAA Policy</p>
                    <p className='text-light fw-bold'>Terms Of Services</p>
                </div>
            </div>
        </div>
    </div>

    {/* Devider */}
    <div className='container-fluid mt-5'>
        <div className='devider'></div>
    </div>


    <div className='row'>
        <div className='col-lg-6 col-12'>
        <div className='p-3 mt-3 d-flex justify-content-around'>
        <i class="fa-brands fa-facebook text-light fs-1"></i>
        <i class="fa-brands fa-linkedin text-light fs-1"></i>
        <i class="fa-brands fa-youtube text-light fs-1"></i>
        <i class="fa-brands fa-twitter text-light fs-1"></i>
        </div>
        </div>

        <div className='col-lg-6 col-12 mt-4'>
 <span className='text-light'>© 2024 Mark Cuban Cost Plus Drug Company, PBC. All rights reserved.</span>
</div>
    </div>

    </div>


    </>
  )
}

export default Footer