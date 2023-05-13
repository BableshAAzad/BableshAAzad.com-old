import React from 'react';
import './Bableshaz.css';
import Home1 from './Home1';
import { Link } from 'react-router-dom'
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      {/* <div className='container'>
      <div className="alert alert-warning alert-dismissible fade show alertOne" role="alert">
        <strong>Cheap Website Designing!</strong> Only on 20k for vloging site ...Offer limited time.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </div> */}
      <div className='container rocky'>
        <h2 className='websi1'>GROW YOUR BUSINESS WITH US</h2>
        <h3 className='websi'>Want your own website</h3>
        <a className="btn btn-primary btn-block shadow" href="mailto:bableshaazad@outlook.com" target="_blank" rel="noopener noreferrer">
        <span className="spinner-grow spinner-grow-sm"></span>
           &nbsp;Order Now!</a>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Our Company</h3>
                <div className='underline mx-auto'></div>
                <p>Our compnay will be designed cheap and worthy website usefull website and Help for leaning in coding like HTML, CSS, JavaScript etc.
                   and Guide for traveling in under India. and also Guide and Tranner for Gym workout and Helth fitness </p>
                <Link to="/services">read more...</Link>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>

        <div className="container mt-3 websi2">
          <div className="jumbotron">
            <h2 className="display-4">Welcome to BableshAAzad.com</h2>
            <p className="lead">This is wonderful place for learning</p>
            {/* <hr className="my-4" /> */}
            <p>here, you can learn programing languages</p>
            <a className="btn btn-outline-primary btn-sm shadow" href="https://www.google.com/maps/place/ritesh/@21.2640812,81.6057601,19z/data=!4m6!3m5!1s0x3a28ddb496c9d577:0x5024e9ce26ee67a8!8m2!3d21.2641144!4d81.6055072!16s%2Fg%2F11fl5rsqt_" target="_blank" rel="noreferrer">View On Google Maps</a>
          </div>
          <hr />
        </div>

      <div className='container'>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="bobv1.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder"></img>
            <h2 className="fw-normal">Website Purpose</h2>
            <p>To provide all person's personal website and given to learning about web designing and resources</p>
            <p><a className="btn btn-secondary shadow" href="/">View details »</a></p>
          </div>
          <div className="col-md-4 text-center">
            <img src="picc.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder"></img>
            <h2 className="fw-normal">Guide for traveling</h2>
            <p>If you want to visit in any place of India then want any information of placeses or personal Guide then contact us.</p>
            <p><a className="btn btn-secondary shadow" href="/">View details »</a></p>
          </div>
          <div className="col-md-4 text-center">
            <img src="picture.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder"></img>
            <h2 className="fw-normal">Learning</h2>
            <p>If you learn about programing languages or web coding then contact for better knowledge.</p>
            <p><a className="btn btn-secondary shadow" href="/">View details »</a></p>
          </div>
        </div>
      </div>

      <Home1 />

      <div className='container mt-3'>
        <h2 className='detailsabot'>Details About BableshAAzad.com Are Listed Here</h2>
        <hr />

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1. Learn To Coding
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. Want to your own web site
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="footer">
          <div className="row">
            <div className="col-md-5">
              <h2 className="arjun">BableshAAzad.com</h2>
              <p className="text-dark">If you want to order you own fully functional non-commerce or woo-commerce,
                bloging etc. website and other information then contact Me! </p>
            </div>
            <div className="col-md-2">
              <h4 className="text-secondary">Courses</h4>
              <ul className="courseList text-dark">
                <li><a href="/" className="text-dark">Business</a></li>
                <li><a href="/" className="text-dark">Software</a></li>
                <li><a href="/" className="text-dark">Designing</a></li>
                <li><a href="/" className="text-dark">Networking</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4 className="text-secondary">Company</h4>
              <ul className="courseList text-dark">
                <li><Link to="/about" className="text-dark">About</Link></li>
                <li><a href="/" className="text-dark">Certification</a></li>
                <li><Link to="/contactDetails" className="text-dark">Forum</Link></li>
                <li><a href="/" className="text-dark">Career</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="support">
                <h4 className="text-secondary">Contact Details</h4>
                <a href="/"><i className="fa fa-phone"></i>&nbsp;+91-7898300815</a><br />
                <a href="mailto:bableshaazad@outlook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i>&nbsp;Bableshaazad@outlook.com</a><br />
                <ul className="social-media">
                  <li><a className='text-warning' href="https://www.facebook.com/Bableshaazad/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a className='text-info' href="https://twitter.com/bableshaazad" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/bableshaazad/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                  <li><a className='text-danger' href="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
                  <li><a className='text-info' href="https://www.linkedin.com/in/bableshaazad/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://bableshaazad.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
