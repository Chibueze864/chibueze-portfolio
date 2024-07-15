"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">C</div>
          <div className="logo-text">Chibueze </div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:chibueze.onyekpere@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I am</small>
                Chibueze Onyekpere
              </h1>
              <p>
                Machine Learning Engineer with a passion for building AI systems with Python and Tensorflow. <span>I am also proficient in a range of web technologies including Node.js, React.js and more, I am thrilled to connect with fellow innovators. 
               </span>
              </p>
              <div className="call-to-action">
                <a href="./Sample_Resume_Template.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:chibueze.onyekpere@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Chibueze864">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/chibueze-onyekpere/">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/Chibueze(1).png" alt="Chibueze Onyekpere" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/numpy.png" width="128" alt="numpy" />
              <img src="./imgs/Tensorflow.png" width="128" alt="Tensorflow" />
             <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/Tensorflow.png" width="128" alt="Tensorflow" />

              <img src="./imgs/numpy.png" width="128" alt="numpy" />
             

            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Machine Learning</h3>
              <ul>
                <li>Tensorflow</li>
                <li>Numpy</li>
                <li>Seaborn</li>
                <li>Scikit Learn</li>
                <li>Pandas</li>
              </ul>
              <h3>Web Development</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Fast API</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Postgress DB</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I am Chibueze, a software engineer who builds web apps and machine learning systems. I firmly believe that a strong educational foundation and robust financial systems form the bedrock for sustainable growth and prosperity.
              </p>
              <p>
                I am currently working on a project called <a href="https://stutorpal.vercel.app/">Stutorpal</a> that connects university students to learn from each other (kind of like upwork for college students).  </p>
                <p>
                I am actively seeking exciting job opportunities in the dynamic tech space where I can apply my diverse skill set to tackle real-world challenges head-on. 
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/stutorpal.jpg" alt="Workplace 1 - Stutorpal" width="100%" />
                  <figcaption>
                    Workplace - 1 Stutorpal
                  </figcaption>
                </div>
              </figure>
              <h3>Stutorpal Team Lead</h3>
              <div>2023-current</div>
              <p>Software Engineer and team lead at Stutorpal.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/BrainBody.png" alt="Workplace 3 - Brain And Body Foundation " width="100%" />
                  <figcaption>
                    Workplace - Brain And Body Foundataion
                  </figcaption>
                </div>
              </figure>
              <h3>Brain And Body Foundation</h3>
              <div>July 2023 - September 2023</div>
              <p>Chief IT specialist and web developer at Brain And Body Foundation.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/Codecampus.jpg" alt="Workplace 2 - Codecampus" width="100%" />
                  <figcaption>
                    Workplace - Codecampus Abuja
                  </figcaption>
                </div>
              </figure>
              <h3>Codecampus Abuja</h3>
              <div>July 2022 - October 2022</div>
              <p>Web developer and coding instructor at Codecampus </p>
            </article>

            
          </div>
        </section>
        <section id="projects" className="work-experience container">
          <h2>
            <small>My</small>
            Projects
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div className="mb-12">
                  <a href="https://wallai-finance.vercel.app/">
                  <img src="./imgs/Wallai.png" alt="wallai personal project" width="100%" height="fit-container"/>
                    </a>
                  <figcaption>
                    Wallai
                  </figcaption>
                </div>
              </figure>
              <h3> Personal finance AI assistant</h3>

            </article>
            <article>
              <figure>
                <div className="mb-12">
                  <a href="https://stutorpal-web-app.vercel.app/">
                     <img src="./imgs/stutorpal.png" alt="stutorpal personal project" width="100%" height="fit-container"/>
                  </a>
                 
                  <figcaption>
                    Stutorpal
                  </figcaption>
                </div>
              </figure>
              <h3> Peer to peer learning app</h3>

            </article>           
            <article>
              <figure>
                <div>
                  <a href="https://dormpro.netlify.app/">
                     <img src="./imgs/Dormpro.png" alt="Project 3 - Dormpro" width="100%" />
                  </a>
                 
                  <figcaption>
                    Project - Dormpro
                  </figcaption>
                </div>
              </figure>
             
              <h3>Hostel Reservation System</h3>

            </article>


          </div>
        </section>

        
        <footer className="footer">
          <div className="container">
            <div className="footer-bottom">
              <p>&copy; 2024 Chibueze Onyekpere. All rights reserved.</p>
            </div>
          </div>
        </footer>
       </main>
    </>
  );
}
