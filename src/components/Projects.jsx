import React from 'react'

const projects = [
  { title: 'COLLATE', img: '/assets/img/collate.png', desc: 'A project website for an organization designed to provide secure and efficient data management for Computer Engineering students.', href: 'https://github.com/iamthighs/COLLATE-Website' },
  { title: 'iSENSOR', img: '/assets/img/isensor.png', desc: 'A Smart Traffic Management System prioritizing emergency vehicles, utilizing YOLOv8 for object detection and logging data including Recognition Accuracy, Latency, and Framerate on the website.', href: 'https://github.com/iamthighs/iSENSOR' },
  { title: 'SCAN ME', img: '/assets/img/scanme.png', desc: "A website for Library Monitoring Management System that offers features such as QR Code Scanner for tracking students' time in and out, camera surveillance, and the collection of student databases.", href: 'https://github.com/iamthighs/SCANME' },
  { title: 'GWA Calculator', img: '/assets/img/3.png', desc: 'A simple website that calculates your General Weighted Average.', href: 'https://github.com/iamthighs/GWACalculator' },
  { title: 'Todo List App', img: '', desc: 'A simple to-do list app that runs in a Docker Container with a Docker Image.', href: 'https://github.com/iamthighs/docker-compose-campaign' },
  { title: 'CRUD App', img: '', desc: 'A simple CRUD Operation using Node JS with MongoDB in a Docker Compose environment.', href: 'https://github.com/iamthighs/docker-rest-api' }
]

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
              <div className="card lift shadow-none rounded-xl mb-3 border-purple">
                <div className="card-body py-5">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    {p.img && <img className="img-fluid mb-4" src={p.img} alt={p.title} style={{height: '7rem', width: '7rem', borderRadius:7}} />}
                    <div className="text-center px-0 px-lg-5">
                      <h3 className="fw-bolder">{p.title}</h3>
                      <p className="text-dark mb-3 small">{p.desc}</p>
                      <p>
                        <a className="btn btn-outline-secondary rounded-pill p-3" href={p.href} target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Documentation">Browse</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
