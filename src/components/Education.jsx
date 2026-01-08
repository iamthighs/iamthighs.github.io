import React from 'react'
import { timeline } from '../data/education'

export default function Education(){
  return (
    <div className="container-xl px-4 mt-5" id="education">
      <header className="py-5 mb-0">
        <div className="container-xl px-4">
          <div className="text-center">
            <h1 className="text-dark fw-bolder">My Educational Background</h1>
            <p className="lead mb-4 text-dark">These are the stages of my academic journey.</p>
          </div>
        </div>
      </header>
      <div className="timeline mb-15">
        {timeline.map((t, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-item-marker">
              <div className="timeline-item-marker-text">{t.period}</div>
              <div className="timeline-item-marker-indicator bg-primary-soft text-primary"><i data-feather="calendar"></i></div>
            </div>
            <div className="timeline-item-content pt-0">
              <div className="col-xxl-4 col-xl-12 mb-4">
                <div className="card h-100 shadow-none rounded-xl border-primary">
                  <div className="card-body h-100 p-5">
                    <div className="row align-items-center">
                      <div className="col-xl-9 col-xxl-12">
                        <div className="me-3 align-items-center">
                          <h5 className="text-primary fw-bolder">{t.title}</h5>
                          <h1 className="text-dark fw-bolder p-0 m-0">{t.heading}</h1>
                          <div className="text-dark fst-italic">{t.school}</div>
                          <div className="card-body">
                            <div className="timeline timeline-xs">
                              {t.items.map((it,i2) => (
                                <div className="timeline-item" key={i2}>
                                  <div className="timeline-item-marker">
                                    <div className="timeline-item-marker-indicator bg-blue"></div>
                                  </div>
                                  <div className="timeline-item-content">{it}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-xxl-12 text-center"><img className="img-fluid" src={t.image} alt="logo" style={{maxWidth: '8rem'}}/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
