import React from 'react';
import './Header11.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Home1() {
    return (
        <div className='container'>
            <div className="companies">
                <h3 className="text-center text-dark">
                    Our Development team
                </h3>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <ul className="companies-list">
                            <li>
                                <img src="p1.jpg" alt='bab1' />
                            </li>
                            <li>
                                <img src="p2.jpg" alt='bab2' />
                            </li>
                            <li>
                                <img src="p3.jpg" alt='bab3' />
                            </li>
                            <li>
                                <img src="p4.jpg" alt='bab5' />
                            </li>
                            <li>
                                <img src="p5.jpg" alt='bab6' />
                            </li>
                        </ul>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1200}>
                        <ul className="companies-list">
                            <li>
                                <img src="p6.jpg" alt='bab7' />
                            </li>
                            <li>
                                <img src="p7.jpg" alt='bab7' />
                            </li>
                            <li>
                                <img src="p8.jpg" alt='bab8' />
                            </li>
                            <li>
                                <img src="p9.jpg" alt='bab9' />
                            </li>
                            <li>
                                <img src="p10.jpg" alt='bab10' />
                            </li>
                        </ul>
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <ul className="companies-list">
                            <li>
                                <img src="p1.jpg" alt='bab1' />
                            </li>
                            <li>
                                <img src="p2.jpg" alt='bab2' />
                            </li>
                            <li>
                                <img src="p3.jpg" alt='bab3' />
                            </li>
                            <li>
                                <img src="p4.jpg" alt='bab5' />
                            </li>
                            <li>
                                <img src="p5.jpg" alt='bab6' />
                            </li>
                        </ul>
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}
