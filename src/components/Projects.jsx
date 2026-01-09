import React from 'react'
import { projects } from '../data/projects'
import SpotlightCard from '../templates/SpotlightCard';


export default function Projects(){
  return (
    <section>
      <header className="page-header page-header-dark bg-tys pb-15" id="projects">
        <div className="container-xl px-4">
          <div className="page-header-content">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-sm-12 text-center">
                <h1 className="fw-bolder text-light">My Startup Projects</h1>
                <div className="text-light">My college experience involved my participation in various applications, including mobile game development and web development.</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container-xl px-4 mt-n15">
        <div className="row justify-content-center">
          
          {projects.map((p, i) => (
            <div className="col-xl-4 mb-3" key={i}>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="#000">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {p.img && <img className="img-fluid mb-4" src={p.img} alt={p.title} style={{height: '7rem', width: '7rem', borderRadius:7}} />}
                    <div className="text-center px-0 px-lg-5">
                      <h3 className="fw-bolder text-white">{p.title}</h3>
                      <p className="text-white mb-3 small">{p.desc}</p>
                      <p>
                        {p.tags && p.tags.map((tag, idx) => (
                          <span key={idx} className="badge bg-cyan text-white me-1">{tag}</span>
                        ))}
                      </p>
                      <p>
                        {p.href && <a className="btn btn-outline-cyan rounded-pill p-3 text-white" href={p.href} target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Documentation">Browse</a>}
                      </p>
                      
                    </div>
                  </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
