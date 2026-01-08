import React from 'react'
import certifications from '../data/certifications'

export default function Certifications(){
  const tabs = [
	{ id: 'overview', label: 'Academic', items: certifications.overview },
	{ id: 'activities', label: 'Skills', items: certifications.activities },
	{ id: 'events', label: 'Events', items: certifications.events }
  ]

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

		<div className="card shadow-none rounded-xl border-blue mb-4">
		  <div className="card-header border-bottom">
			<ul className="nav nav-tabs card-header-tabs justify-content-center" id="dashboardNav" role="tablist">
			  {tabs.map(t => (
				<li className="nav-item me-1" key={t.id}>
				  <a className={`nav-link ${t.id === 'overview' ? 'active' : ''}`} id={`${t.id}-pill`} href={`#${t.id}`} data-bs-toggle="tab" role="tab" aria-controls={t.id} aria-selected={t.id === 'overview'}>
					{t.label}
				  </a>
				</li>
			  ))}
			</ul>
		  </div>

		  <div className="card-body">
			<div className="tab-content" id="dashboardNavContent">
			  {tabs.map((t, ti) => (
				<div className={`tab-pane fade ${t.id === 'overview' ? 'show active' : ''}`} id={t.id} role="tabpanel" aria-labelledby={`${t.id}-pill`} key={t.id}>
				  <div className="row">
					{t.items.map((it, i) => (
					  <div className={`col-xl-${t.id === 'overview' ? '2' : '3'} mb-3`} key={i}>
						<a className="card lift shadow-none rounded-0" href={it.file} target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title={it.title}>
						  <img src={it.file} alt={it.title} className="img-fluid" />
						</a>
					  </div>
					))}
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	</section>
  )
}
