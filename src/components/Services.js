import React from 'react';
import Footer from './Footer';
import './Header11.css';
import { Link } from 'react-router-dom';
import Services1 from './Services1';

export default function Services() {
  return (
    <>
      <div className='container'>
        <Services1 />
        <div className="course p-0">
          <div className="text-center">
            <h3>Our Courses</h3>
          </div>
          <ul className="course-list">
            <li>
              <i className="fa fa-html5"></i>
              <h4>HTML</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/">Read More...</a>
            </li>
            <li>
              <i className="fa fa-css3"></i>
              <h4>CSS</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/">Read More...</a>
            </li>
            <li>
              <i className="fa fa-database"></i>
              <h4>Database</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/">Read More...</a>
            </li>
            <li>
              <i className="fa fa-github"></i>
              <h4>GitHub</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/">Read More...</a>
            </li>
            <li>
              <i className="fa fa-drupal"></i>
              <h4>Drupal</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/">Read More...</a>
            </li>
          </ul>
        </div>

        {/* <!-- code for Lets Start -->f */}
        <div className="lets-start text-center">
          <h3 className="text-light">Let's start Learning...</h3>
          <br />
          <Link to="/contactDetails" className="btn btn-outline-light btn-md">Register</Link>
        </div>

        {/* <!-- Code for Projects --> */}
        <div className="projects">
          <h3 className="text-center">Project</h3>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <br />
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  HTML
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  CSS
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  JavaScript
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  )
}
