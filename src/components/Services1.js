import React from 'react';
import './Bableshaz.css';
import { Link } from 'react-router-dom';

export default function Services1() {
    return (
        <div>
            <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        <div className='col-md-4 mb-2'>
                            <div className='card shadow'>
                                <img src="p1.jpg" className='w-100 border-bottom' alt="Freinds" />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className='underline mx-auto'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card shadow'>
                                <img src="p4.jpg" className='w-100 border-bottom' alt="Freinds" />
                                <div className='card-body'>
                                    <h6>Services 2</h6>
                                    <div className='underline mx-auto'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card shadow'>
                                <img src="p5.jpg" className='w-100 border-bottom' alt="Freinds" />
                                <div className='card-body'>
                                    <h6>Services 3</h6>
                                    <div className='underline mx-auto'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
