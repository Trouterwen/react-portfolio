import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <body style={{ backgroundColor: '#0197B1' }}>
      <nav className="navbar navbar-expand-lg fixed-top navbarScroll" style={{ backgroundColor: '#0197B1' }}>
        <div className="container">
          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="./index.html">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./index.html#projects-skills">
                  Projects/Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h2 className="hero_title">Hi, it's me Lance</h2>
              <p className="hero_desc">I am a Marine Corps Veteran, and an aspiring software developer in Minneapolis.</p>
            </div>
          </div>
        </div>
      </section>
    </body>
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              <div className="rounded-top text-black d-flex flex-row" style={{ backgroundColor: '#04fdbf', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <img src="C:\Users\futzn\Bootcamp\classwork\homework\my-react-portfolio\react-portfolio\assets\IMG_3803.JPG" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h3>Lance Nguyen</h3>
                  <h5>Marine Corps Veteran|Student Developer</h5>
                </div>
              </div>
              <div className="p-4 text-grey" style={{ backgroundColor: '#78e9f6' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <a className="small text-grey mb-0" href="https://github.com/Trouterwen" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                  <div className="px-3">
                    <a className="small text-grey mb-0" href="https://www.linkedin.com/in/lance-n-214402130/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                  <div>
                    <a className="small text-grey mb-0" href="" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
              <br />
              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <h3 className="lead fw-normal mb-1">About me:</h3>
                  <div className="p-4">
                    <p>
                      I am a driven and dynamic individual with a multifaceted background. As a Marine Corps veteran, I bring a disciplined work ethic, strong leadership skills, and a commitment to excellence to every endeavor I undertake. Inspired by my experiences, I am currently charting a new course as I pursue my passion for technology and software engineering. Currently enrolled at the University of Minnesota, I am dedicated to expanding my knowledge in this field while embracing the challenges and creative opportunities that coding presents. From serving my country to embarking on a promising career path in the tech world, I aim to reflect my determination to make a meaningful impact in both academic pursuits and my future endeavors as a software engineer.
                    </p>
                  </div>
                  <br />
                  <div className="mb-5">
                    <h3 className="lead fw-normal mb-1">Projects/Skills</h3>
                    <div className="p-4" style={{ backgroundColor: '#78e9f6' }}>
                      <ul>
                        <div>
                          <button className="button">
                            <a className="small text-grey mb-0" href="https://a-down.github.io/GameVerseHub/" target="_blank" rel="noopener noreferrer">VideoGame Database</a>
                          </button>
                        </div>
                        <div>
                          <button className="button">
                            <a className="small text-grey mb-0" href="https://group-project2-health-3f37caaec82e.herokuapp.com/" target="_blank" rel="noopener noreferrer">Mock Dating Site</a>
                          </button>
                        </div>
                        <div>
                          <button className="button">
                            <a className="small text-grey mb-0" href="https://trouterwen.github.io/prework-study-guide/" target="_blank" rel="noopener noreferrer">First Deployed site</a>
                          </button>
                        </div>
                        <div>__________________________________________________________</div>
                        <li>
                          <p>
                            Skills: CSS, JavaScript, HTML, Node.js, MySQL, React, Aircraft Maintenance, MCT-Marine Corps Combat Training , Aircraft electrical/instrument/flight control systems, Customer service, Time management, Food service, API Management
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Photos </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img src="./" alt="image 1" className="w-100 rounded-3" style={{ maxHeight: '300px' }} />
                    </div>
                    <div className="col mb-2">
                      <img src="futzn/Bootcamp/classwork/homework/react-portfolio/src/IMG_4183.JPG" alt="image 1" className="w-100 rounded-3" style={{ maxHeight: '300px' }} />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img src="./assets/images/IMG_1699.JPG" alt="image 1" className="w-100 rounded-3" style={{ maxHeight: '300px' }} />
                    </div>
                    <div className="col">
                      <img src="./assets/images/IMG_5827.JPG" alt="image 1" className="w-100 rounded-3" style={{ maxHeight: '300px' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <p>©2023 Professional Portfolio. Lance Nguyen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
