import React from 'react'
import { socialLinks } from '../data/social'

export default function Footer(){
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-auto bg-purple mt-n15">
      <div className="container-xl px-4">
        <div className="text-center">
          <div className="mb-5">
            <a href="#home" className="mb-5 mt-10">
              <img className="mt-10" src="/assets/img/white-tys.svg" alt="brand" style={{maxWidth: '7rem'}} />
            </a>
          </div>
          <div className="mb-3">
            <h1 className="text-gray-300 fst-italic mb-0">Growing and improving each day</h1>
            <h1 className="text-gray-300 fst-italic mb-5">through living and learning.</h1>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-4 col-sm-12 col-md-6 col-lg-6 rounded-pill bg-light pb-2 pt-2 text-center">
              {socialLinks.map((link, i) => (
                <a key={i} className={`btn btn-outline-purple btn-icon ${i < socialLinks.length - 1 ? 'me-4' : ''} my-1`} href={link.href} target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title={link.title}>
                  <i data-feather={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <p className="lead text-gray-500 fw-bold">E-Porfolio by Reynaldo B. Cortez Jr. &copy;  {currentYear}</p>
          <a className="btn btn-purple rounded-pill small mb-4 text-gray-500 fw-bold text-center" href="https://react.dev/" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Start React + Vite">
            Made with
            <img className="ms-2" src="/assets/img/logos/reactlibrary.png" alt="startbootstrap" style={{width: '2rem'}} /> 
          </a>
          <br />
        </div>
      </div>
    </footer>
  )
}
