import React from 'react'

export default function Nav(){
  return (
    <nav className="topnav shadow-sm navbar navbar-expand justify-content-between justify-content-sm-start navbar-light bg-white sticky-top" style={{height: '5rem'}} id="sidenavAccordion">
      <a className="me-3 ms-4 ms-lg-15" href="#home">
        <img src="/assets/img/tys-logo-512x512.png" style={{maxWidth:'5.25rem'}} alt="logo" />
      </a>
      <ul className="navbar-nav align-items-center ms-auto">
        <a className="pt-3 pb-3" href="#skills" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Skills">
          <div className="btn btn-outline-purple btn-icon me-1"><i data-feather="star"></i></div>
        </a>
        <a className="pt-3 pb-3" href="#education" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Education">
          <div className="btn btn-outline-purple btn-icon me-1"><i data-feather="book-open"></i></div>
        </a>
        <a className="pt-3 pb-3" href="#projects" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Projects">
          <div className="btn btn-outline-purple btn-icon me-1"><i data-feather="code"></i></div>
        </a>
        <a className="pt-3 pb-3" href="#certifications" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Certifications">
          <div className="btn btn-outline-purple btn-icon me-4"><i data-feather="award"></i></div>
        </a>
        <li className="nav-item dropdown no-caret me-3 me-lg-10 dropdown-notifications">
          <a className="btn btn-purple btn-icon dropdown-toggle" id="navbarDropdownMessages" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i data-feather="mail"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
            <a className="dropdown-item py-3" href="mailto:reynaldo.cortez0908@gmail.com" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="left" title="Send me a message">
              <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="mail"></i></div>
              <div>
                <div className="small text-primary">Email</div>
                reynaldo.cortez0908@gmail.com
              </div>
            </a>
            <div className="dropdown-divider m-0"></div>
            <a className="dropdown-item py-3" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="left" title="Contact me">
              <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="phone"></i></div>
              <div>
                <div className="small text-primary">Contact Number</div>
                (+63) 960 375-2437
              </div>
            </a>
            <div className="dropdown-divider m-0"></div>
            <a className="dropdown-item py-3" href="/assets/docs/RBCortezJr_Curriculum Vitae.pdf" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="left" title="Download CV">
              <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="download"></i></div>
              <div>
                <div className="small text-primary">Profile</div>
                Curriculum Vitae
              </div>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
