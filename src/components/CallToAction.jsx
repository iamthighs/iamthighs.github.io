import React from 'react'



export default function CallToAction(){
  return (
    <section>
      <div class="container-xl px-4 mt-10">
			<div class="card shadow-none bg-gray-900 rounded-xl mb-5 h-100">
				<div class="card-body py-5">
					<div class="row text-center justify-content-center align-items-center">
						<div class="col-xl-4 col-sm-12x">
							<h1 class="fw-bolder text-light">Start a Project</h1>
						</div>
						<div class="col-xl-4 col-sm-12">
							<h4 class="fw-bold text-light">Interested in working together? We should set up a time to chat.</h4>
						</div>
						<div class="col-xl-4 col-sm-12">
							<a class="btn btn-outline-cyan rounded-pill text-light" href="mailto:reynaldo.cortez0908@gmail.com" target="_blank">
								<svg class="svg-inline--fa fa-envelope fa-fw text-light me-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"></path></svg>
								Send me a message
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
  )
}
