import React from 'react'
import SpotlightCard from '../templates/SpotlightCard';

import { frontendSkills, backendSkills, organizations, tools } from '../data/skills'

export default function Skills(){
  return (
    <div className="container-xl px-4 mt-n15" id="skills">
      <div className="row">
        <div className="col-xl-4 mb-4">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="#000">
                <div className="d-flex justify-content-center flex-column mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3 align-items-center">
                  <div className="icon-stack bg-purple text-light mb-3"><i className="feather text-light" data-feather="code"></i></div>
                  <h5 className="fw-bolder text-purple">Frontend Development</h5>
                  <div className="text-light small">I enjoy creating user-friendly interfaces that are both efficient and easy to maintain</div>
                </div>
                <img src="/assets/img/illustrations/frontend-developer.svg" alt="frontend" style={{width: '8rem'}} />
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-purple text-center">Frontend Skills:</h5>
              <div className="list-group list-group-flush small">
                {frontendSkills.map((s,i) => (
                  <div className="list-group-item bg-transparent" key={i}>
                    <div className="d-flex align-items-center">
                      <div className="avatar me-2"><img className="img-fluid" src={s.img} alt={s.name} style={{borderRadius:3}}/></div>
                      <span className="text-light">{s.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mb-3">
              <h5 className="text-purple small">Application Tools:</h5>
              <div className="avatar">
                {tools.frontend.map((tool, i) => (
                  <img key={i} className="img-fluid me-2" src={tool.img} alt={tool.name} style={{borderRadius:3}}/>
                ))}
              </div>
            </div>
          </SpotlightCard>
          
        </div>

        <div className="col-xl-4 mb-4">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="#000">
                <div className="d-flex justify-content-center flex-column mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3 align-items-center">
                  <div className="icon-stack bg-primary text-light mb-3"><i className="feather text-light" data-feather="terminal"></i></div>
                  <h5 className="fw-bolder text-primary">Backend Development</h5>
                  <div className="text-light small">I like to program things from the server-side, and write clean and maintainable code</div>
                </div>
                <img src="/assets/img/illustrations/backend-developer.svg" alt="backend" style={{width: '8rem'}} />
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-primary text-center">Backend Skills:</h5>
              <div className="list-group list-group-flush small">
                {backendSkills.map((s,i) => (
                  <div className="list-group-item bg-transparent" key={i}>
                    <div className="d-flex align-items-center">
                      <div className="avatar me-2"><img className="img-fluid" src={s.img} alt={s.name} style={{borderRadius:3}}/></div>
                      <span className="text-light">{s.name}</span>
                    </div>
                  </div>
                ))}
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
          </SpotlightCard>
        </div>

        <div className="col-xl-4 mb-4">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="#000">
              <div className="d-flex justify-content-center flex-column mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3">
                  <div className="icon-stack bg-green text-primary mb-3"><i className="feather text-light" data-feather="user"></i></div>
                <h5 className="fw-bolder text-green">Leadership/ Collaboration</h5>
                <div className="text-light small">I genuinely care about people, and love helping a team to achieve a common goal</div>
                </div>
                <img src="/assets/img/illustrations/team-collaboration.svg" alt="team" style={{width: '8rem'}} />
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-green text-center">Previous Organizations:</h5>
              <div className="list-group list-group-flush small">
                {organizations.map((org, i) => (
                  <div className="list-group-item bg-transparent" key={i} data-bs-toggle="tooltip" data-bs-placement="right" title={org.title}>
                    <div className="d-flex align-items-center">
                      <div className="avatar me-2"><img className="img-fluid" src={org.img} alt={org.name} style={{borderRadius:3}}/></div>
                      <span className='text-light'>{org.name}</span>
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
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}
