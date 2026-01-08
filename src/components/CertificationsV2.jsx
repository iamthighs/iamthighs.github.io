import React from 'react'
import {tabs} from '../data/certificationsv2'
import CircularGallery from '../templates/CircularGallery'

export default function CertificationsV2(){
  

  return (
	<section>
	  <div className="container-xl px-4 mt-5 mb-5" id="certifications">
		<header className="py-5 mb-0">
		  <div className="container-xl px-4">
			<div className="text-center">
			  <h1 className="text-dark fw-bolder">My Certifications</h1>
			  <p className="lead mb-4 text-dark">Here are some of my academic achievements and certifications</p>
			</div>
		  </div>
		</header>

		<div className="card shadow-none rounded-xl mb-4 bg-gray-900">
		  <div className="card-body">
			<div style={{ height: '600px', position: 'relative' }}>
				<CircularGallery
					bend={0}
					items={tabs}
					textColor='#fff'
				/>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  )
}
