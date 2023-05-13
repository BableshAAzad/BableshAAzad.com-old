import React from 'react'

export default function LoginForm() {
  return (
    <div>
      <div className="container mt-3">
		<section className="custom-box">
		<div className="container-fluid">
			<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<img src="bob.jpg" className="img-fluid rounded-circle" alt="BableshAAzad"/>
				</div>
				<div className="col-md-8 col-lg-6 offset-xl-1">
					<form>
						<div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
							<p className="lead fw-normal mb-0 me-3">Sign Up Using &nbsp;&nbsp; : &nbsp;&nbsp;</p>

							<button type="button" className="btn btn-primary btn-floating mx-1">
								<i className="fa fa-facebook"></i>
							</button>
							<button type="button" className="btn btn-primary btn-floating mx-1">
								<i className="fa fa-twitter"></i>
							</button>
							<button type="button" className="btn btn-primary btn-floating mx-1">
								<i className="fa fa-linkedin"></i>
							</button>
							<button type="button" className="btn btn-primary btn-floating mx-1">
								<i className="fa fa-instagram"></i>
							</button>
						</div>

						<div className="divider d-flex align-items-center my-4">
							<p className="text-center fw-bold-mx-3 mb-0">Or</p>
						</div>

						<div className="form-outline mb-3">
							<input type="email" id="exampleEmail" className="form-control form-control-lg" placeholder="Enter a valid email address"/>
							<label className="form-lable" htmlFor="exampleEmail">Email Address</label>
						</div>

						<div className="form-outline mb-3">
							<input type="password" id="examplePassword" className="form-control form-control-lg" placeholder="Enter Password"/>
							<label className="form-lable" htmlFor="examplePassword">Password</label>
						</div>

						<div className="d-flex justify-content-between align-items-center">
							<div className="form-check mb-0">
								<input type="checkbox" className="form-check-input me-2" value="" id="exampleCheckBox"/>
								<label className="form-check-label" htmlFor="exampleCheckBox">Remember Me</label>
							</div>
						</div>

						<a href="/" className="text-body">Forgot Password?</a>

						<div className="mt-4 pt-2">
							<button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: "2.5rem ",paddingRight: "2.5rem"}}>Login</button>
							<p className="small fw-bold mt-2 pt-1 mb-0"> Don't Have an account?
                              <a href="/" className="link-danger">Register</a>
							</p>
						</div>
						<br/>
					</form>
				</div>
			</div>
		</div>
		<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
			<div className="text-white mb-3 mb-md-0">
            <a className='text-light' href="https://www.bableshaazad.com" target="_blank" rel="noopener noreferrer">Bableshaazad.com</a> © 2023 &nbsp;Copyright BableshAAzad. All right Reserved.
			</div>
			<div>
				<a href="https://www.facebook.com/Bableshaazad/" className="text-white me-4">
					<i className="fa fa-facebook"></i>
				</a>&nbsp;&nbsp;
				<a href="https://twitter.com/bableshaazad" target="_blank" rel="noopener noreferrer" className="text-white me-4">
					<i className="fa fa-twitter"></i>
				</a>&nbsp;&nbsp;
				<a href="https://bableshaazad.com/" target="_blank" rel="noopener noreferrer" className="text-white me-4">
					<i className="fa fa-google"></i>
				</a>&nbsp;&nbsp;
				<a href="https://www.linkedin.com/in/bableshaazad/" target="_blank" rel="noopener noreferrer" className="text-white me-4">
					<i className="fa fa-linkedin"></i>
				</a>
			</div>
		</div>
	</section>
	</div>
    </div>
  )
}
