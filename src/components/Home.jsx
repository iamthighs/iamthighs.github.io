import React from 'react'

export default function Home(){
  return (
    <section id="home">
      <header className="py-5 bg-light mb-0">
        <div className="container-xl px-4">
          <div className="text-center">
            <h1 className="text-dark fw-bolder mt-10">Hello! I am Reynaldo B. Cortez Jr.</h1>
            <p className="lead mb-4 text-dark">An Aspiring Professional Software Developer.</p>
          </div>
        </div>
      </header>
      <div className="text-center bg-light">
        <img className="img-fluid mb-0" src="/assets/img/illustrations/tys-avatar-professional.png" alt="avatar" style={{maxWidth: '16.25rem'}} />
      </div>
      <header className="page-header page-header-dark bg-tys pb-15">
        <div className="container-xl px-4">
          <div className="page-header-content">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-sm-12 mt-4 text-center">
                <h1 className="fw-bolder text-light">Welcome to my Portfolio!</h1>
                <div className="text-light">I am passionate in creating efficient frontend and backend solutions as being part of the Development Team in my College Journey. Looking to start the career as an entry-level software developer with enough knowledge driven by technology.</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
