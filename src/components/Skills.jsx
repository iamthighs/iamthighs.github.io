import React from 'react'
import SmartImage from './SmartImage'
import { frontendSkills, backendSkills, organizations, tools } from '../data/skills'

export default function Skills(){
  return (
    <div className="container-xl px-4 mt-n15" id="skills">
      <div className="row">
        <div className="col-xl-4 mb-4">
          <div className="card rounded-xl shadow-none card-waves h-1000 border-purple">
            <div className="card-body d-flex justify-content-center flex-column mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3 align-items-center">
                  <div className="icon-stack bg-secondary-soft text-secondary mb-3"><i className="feather text-secondary" data-feather="code"></i></div>
                  <h5 className="fw-bolder">Frontend Development</h5>
                  <div className="text-dark small">I enjoy creating user-friendly interfaces that are both efficient and easy to maintain</div>
                </div>
                <img src="/assets/img/illustrations/frontend-developer.svg" alt="frontend" style={{width: '8rem'}} />
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-secondary text-center">Frontend Skills:</h5>
              <div className="list-group list-group-flush small">
                {frontendSkills.map((s,i) => {
                  const base = `/assets/img/logos/${s.toLowerCase().replace(/\s/g,'').replace(/[^a-z]/g,'')}`
                  return (
                    <div className="list-group-item" key={i}>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-2"><SmartImage className="img-fluid" base={base} alt={s} style={{borderRadius:3}}/></div>
                        {s}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="text-center mb-3">
              <h5 className="text-secondary small">Application Tools:</h5>
              <div className="avatar">
                {tools.frontend.map((tool, i) => (
                  <img key={i} className="img-fluid me-2" src={tool.img} alt={tool.name} style={{borderRadius:3}}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 mb-4">
          <div className="card rounded-xl shadow-none card-waves h-1000 border-blue">
            <div className="card-body d-flex justify-content-center flex-column mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3 align-items-center">
                  <div className="icon-stack bg-primary-soft text-primary mb-3"><i className="feather text-primary" data-feather="terminal"></i></div>
                  <h5 className="fw-bolder">Backend Development</h5>
                  <div className="text-dark small">I like to program things from the server-side, and write clean and maintainable code</div>
                </div>
                <img src="/assets/img/illustrations/backend-developer.svg" alt="backend" style={{width: '8rem'}} />
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-primary text-center">Backend Skills:</h5>
              <div className="list-group list-group-flush small">
                {backendSkills.map((s,i) => {
                  const base = `/assets/img/logos/${s.toLowerCase().replace(/\s/g,'').replace(/[^a-z]/g,'')}`
                  return (
                    <div className="list-group-item" key={i}>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-2"><SmartImage className="img-fluid" base={base} alt={s} style={{borderRadius:3}}/></div>
                        {s}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="text-center mb-3">
              <h5 className="text-primary small">Development Tools:</h5>
              <div className="avatar">
                {tools.backend.map((tool, i) => (
                  <img key={i} className="img-fluid me-2" src={tool.img} alt={tool.name} style={{borderRadius:3}}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 mb-4">
          <div className="card rounded-xl shadow-none card-waves h-100 border-green">
            <div className="card-body d-flex justify-content-center flex-column mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3">
                  <div className="icon-stack bg-green-soft text-primary mb-3"><i className="feather text-green" data-feather="user"></i></div>
                <h5 className="fw-bolder">Leadership/ Collaboration</h5>
                <div className="text-dark small">I genuinely care about people, and love helping a team to achieve a common goal</div>
                </div>
                <img src="/assets/img/illustrations/team-collaboration.svg" alt="team" style={{width: '8rem'}} />
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-green text-center">Previous Organizations:</h5>
              <div className="list-group list-group-flush small">
                {organizations.map((org, i) => (
                  <div className="list-group-item" key={i} data-bs-toggle="tooltip" data-bs-placement="right" title={org.title}>
                    <div className="d-flex align-items-center">
                      <div className="avatar me-2"><img className="img-fluid" src={org.img} alt={org.name} style={{borderRadius:3}}/></div>
                      {org.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mb-3">
              <h5 className="text-green small">Team Collaboration Tools:</h5>
              <div className="avatar">
                {tools.collaboration.map((tool, i) => (
                  <img key={i} className="img-fluid me-2" src={tool.img} alt={tool.name} style={{borderRadius:3}}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
