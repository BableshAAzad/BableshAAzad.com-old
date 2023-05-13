import React from 'react'
import './Bableshaz.css';
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function ContactDetails() {
    return (
        <div>

            <div className='container mt-3'>
                <h3>Contact us for any Query</h3>
                <hr />
                <form className="row g-3 formCol">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="name" className="form-control" id="inputName" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="reasonForContact" className="form-label">Reason For Contact</label>
                        <input type="password" className="form-control" id="reasonForContact" placeholder="Type Your Problem" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="xyz@mail.com" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    {/* <div className="aaaa">
                        <button type="submit" className="btn btn-primary mx-2 ">Submit</button>
                        <Link className="btn btn-primary" to='/loginForm'>Login</Link>
                    </div> */}

                    <div className="btn-group col-md-2 shadow">
                        <button type="submit" className="btn btn-success ">Submit</button>
                        <Link className="btn btn-info" to='/loginForm'>Login</Link>
                        <button type="button" className="btn btn-warning">Signin</button>
                    </div>

                </form>
                <hr />
            </div>

            <div className="support">
                <h3 className="text-secondary">Contact Details</h3>
                <br />
                <a href="/" className='boss'><i className="fa fa-phone"></i>&nbsp;+91-7898300815</a><br />
                <a href="mailto:bableshaazad@outlook.com" target="_blank" rel="noopener noreferrer" className='boss'><i className="fa fa-envelope"></i>&nbsp;Bableshaazad@outlook.com</a><br />
                <br /><br />
                <div className='row'>
                    <div className='col-md-2'>
                        <p className='fab'>FaceBook Page</p>
                        <a href="https://www.facebook.com/Bableshaazad/" target="_blank" rel="noopener noreferrer" className='sharad'><i className="fa fa-facebook"></i></a>
                        <br />
                        <a href='https://www.facebook.com/Bableshaazad/' target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                    <div className='col-md-2'>
                        <p className='twit'>Twitter Page</p>
                        <a href="https://twitter.com/bableshaazad" target="_blank" rel="noopener noreferrer" className='sharad'><i className="fa fa-twitter"></i></a>
                        <br />
                        <a href='https://twitter.com/bableshaazad' target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                    <div className='col-md-2'>
                        <p className='inst'>Instagram Page</p>
                        <a href="https://www.instagram.com/bableshaazad/" target="_blank" rel="noopener noreferrer" className='sharad'><i className="fa fa-instagram"></i></a>
                        <br />
                        <a href='https://www.instagram.com/bableshaazad/' target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className='col-md-2'>
                        <p className='yout'>Youtube Channel</p>
                        <a href="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ" target="_blank" rel="noopener noreferrer" className='sharad'><i className="fa fa-youtube"></i></a>
                        <br />
                        <a href='https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ' target="_blank" rel="noopener noreferrer">Youtube</a>
                    </div>
                    <div className='col-md-2'>
                        <p className='linke'>LinkedIn Page</p>
                        <a href="https://www.linkedin.com/in/bableshaazad/" target="_blank" rel="noopener noreferrer" className='sharad'><i className="fa fa-linkedin"></i></a>
                        <br />
                        <a href='https://www.linkedin.com/in/bableshaazad/' target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </div>
                    <div className='col-md-2'>
                        <p className='gogl'>Google</p>
                        <a href="https://bableshaazad.com/" target="_blank" rel="noopener noreferrer" className='sharad'><i className="fa fa-google"></i></a>
                        <br />
                        <a href='https://bableshaazad.com/' target="_blank" rel="noopener noreferrer">Google.com</a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
