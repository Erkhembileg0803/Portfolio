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
import Mrbytelibrary from '../pics/mrbytelibrary.png'
import HistoryReflection from '../pics/historyreflection.png'
import { useState } from 'react';
export default function Homepage(){
     const [experience, setExperience] = useState([
          {
               title: 'MrByteLibrary',
               date: 'September, 2024 - October, 2024',
               description: "First ever website my team built for a small tournament inside the computer science class.",
               position: 'top',
               link: 'https://erkhembileg0803.github.io/Mrbytelibrary',
          },
          {
               title: 'History Reflection',
               date: 'January, 2025 - February, 2025',
               description: "Did a small website for my friend designed for her competition, I thought that making a blog like website was better than the traditional presentations",
               position: 'middle',
               link: 'http://erkhembileg0803.github.io/historyreflection'
          },
          {
               title: 'AtIelts',
               date: 'January, 2025 - February, 2025',
               description: "It was supposed to be an IELTS practice website for my school ETC(English Training Center) but I kinda got burnt out.",
               position: 'middle',
               link: '#'
          },
          {
               title: 'EduTest',
               date: 'February, 2025 - May, 2025',
               description: "An ongoing website for my school, built for students to take exams check their grades, and for teachers to assign new tests.  (haven't deployed yet.)",
               position: 'bottom',
               link: '#'
          },
     ])
     const [project, setProject] = useState([
          {
               title: 'EduTest',
               tools: ['Javascript', 'React', 'SCSS'],
               description: "Website for students to take tests, and for teachers to make them.",
               link: '#',
               img: EduTest
          },
          {
               title: 'AtIelts',
               tools: ['Javascript', 'React', 'SCSS'],
               description: "Website for students to practice for the IELTS test with retro-game style.",
               link: '#',
               img: '',
          },
          {
               title: 'History Reflection',
               tools: ['Javascript', 'React', 'SCSS'],
               description: "A Blog-Like website dedicated for a competition.",
               link: 'http://erkhembileg0803.github.io/historyreflection',
               img: HistoryReflection,
          },
          {
               title: 'MrByteLibrary',
               tools: ['HTML', 'CSS'],
               description: "A library website where I have put the books I read or I want to read.",
               link: 'http://erkhembileg0803.github.io/Mrbytelibrary',
               img: Mrbytelibrary,
          },
     ])
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
                         {
                              experience.map(({title, date, description, position, link}) => (
                                   <Experience title={title} date={date} description={description} position={position} link={link}/>
                              ))
                         }
                    </article>
               </section>
               <section className='projectsContainer'>
                    <h1>Projects</h1>
                    <article className='projects'>
                              {
                                   project.map(({title, tools, description, link, img}) => (
                                        <Project title={title} tools={tools} description={description} link={link} img={img}/>
                                   ))
                              }
                    </article>
               </section>
          </div>
     </main>
     </div>
     </>
}
function Experience(props){
     const {title, date, description, position, link} = props;
     return <div className='container'>   
               <div className="arrow">
                    <div className="dot"></div>
                    <div className={`line ${position}`}></div>
               </div>
           <div className='information'>
               <Link className="title" to={link} target={link !== '#' ? '_blank' : ''}>{title}</Link>
               <span className="date">{date}</span>
               <span className="description">{description}</span>
           </div>
          </div>
}
function Project(props){
     const {title, img, tools, description,link} = props;
     return <Link to={link !== '#'? link : ''} className="container" target={link !== '#' ? '_blank' : ''}>
               <img src={img}/>
               <div className="info">
                   <h3 className='title'>{title}</h3>
                   {tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                   ))}
                   <p className='description'>{description}</p>
                   <button className='button'>Learn More  <i className="fa fa-arrow-right"></i></button>
               </div>
            </Link>
}