import Header from '../header';
import './homepage.scss';
import Javascript from '../svg/javascript';
import React from '../svg/react';
import Sass from '../svg/sass';
import HTML from '../svg/html';
import GIT from '../svg/git';
import CSS from '../svg/css';
import { Link } from 'react-router-dom';
import EduTest from '../pics/EduTest.png'
export default function Homepage(){
     return <>
     <div className="homepage">
     <Header/>
     <main>
          <div className='main'>
               <section className='bioContainer'>
                    <article className="bio">
                         <h1>Erkhembileg Batzorig 
                              <div>
                                   <a><i className="fa fa-instagram"></i></a>
                                   <a><i className="fa fa-facebook"></i></a>
                                   <a><i className="fa fa-github"></i></a>
                              </div>
                         </h1>
                         <div className='location'>
                         <i class="fa fa-map-marker"></i> Mongolia, Ulaanbaatar
                         </div>
                         <p>
                              17 years old software developer. "Future Pilot"
                         </p>
                    </article>
               </section>
               <section className='skillsContainer'>
                     <h1>Skills</h1>
                    <article className='skills'>
                         <div>
                              <span><Javascript/>JavaScript</span>
                              <span><React/>React JS</span>
                              <span><Sass/>SCSS</span>
                              <span><HTML/>HTML</span>
                              <span><CSS/>CSS</span>
                              <span><GIT/>Git</span>
                         </div>
                    </article>
               </section>
               <section className='experienceContainer'>
                    <h1>Experience</h1>
                    <article className='experience'>
                         <Experience title="EduTest" date="February, 2025 - May, 2025" description="An ongoing website for my school, built for students to take exams check their grades, and for teachers to assign new tests.  (haven't deployed yet.)" position="top"/>
                         <Experience title="AtIelts" date="January, 2025 - February, 2025" description="It was supposed to be an IELTS practice website for my school ETC(English Training Center) but I kinda got burnt out." position="middle"/>
                         <Experience title="History Reflection" date="January, 2025 - February, 2025" description="Did a small website for my friend designed for her competition, I thought that making a blog like website was better than the traditional presentations" position="bottom"/>
                    </article>
               </section>
               <section className='projectsContainer'>
                    <h1>Projects</h1>
                    <article className='projects'>
                              <Project  title='EduTest' tools={['Javascript', 'React', 'SCSS']} description="Website for students to take tests, and for teachers to make them."/>
                              <Project  title='AtIelts' tools={['Javascript', 'React', 'SCSS']} description="Website for students to practice for the IELTS test with retro-game style."/>
                              <Project  title='History Reflection' tools={['Javascript', 'React', 'SCSS']} description="A Blog-Like website dedicated for a competition."/>
                    </article>
               </section>
          </div>
     </main>
     </div>
     </>
}
function Experience(props){
     const {title, date, description, position} = props;
     return <div className='container'>   
               <div className="arrow">
                    <div className="dot"></div>
                    <div className={`line ${position}`}></div>
               </div>
           <div className='information'>
               <Link className="title">{title}</Link>
               <span className="date">{date}</span>
               <span className="description">{description}</span>
           </div>
          </div>
}
function Project(props){
     const {title, img, tools, description} = props;
     return <div className="container">
               <img />
               <div className="info">
                   <h3 className='title'>{title}</h3>
                   {tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                   ))}
                   <p className='description'>{description}</p>
                   <button>Learn More  <i className="fa fa-arrow-right"></i></button>
               </div>
            </div>
}