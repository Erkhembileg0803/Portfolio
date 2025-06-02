import Header from '../header';
import './homepage.scss';
import Javascript from '../svg/javascript';
import React from '../svg/react';
import Sass from '../svg/sass';
import HTML from '../svg/html';
import GIT from '../svg/git';
import CSS from '../svg/css';
import { Link } from 'react-router-dom';
import Projects from '../projects';
import { useState } from 'react';
export default function Homepage(){
     const [experience, setExperience] = useState([
          {
               title: 'MrByteLibrary',
               date: '2024 оны 9-р сар - 10-р сар',
               description: "Компьютер шинжлэх ухааны ангид зохиогдсон жижиг тэмцээний хүрээнд манай баг хийсэн анхны вэбсайт.",
               position: 'top',
               link: 'https://erkhembileg0803.github.io/Mrbytelibrary',
          },
          {
               title: 'History Reflection',
               date: '2025 оны 1-р сар - 2-р сар',
               description: "Найзынхаа тэмцээнд зориулж жижиг вэбсайт хийсэн, уламжлалт презентацийн оронд блог маягийн вэбсайт хийх нь илүү дээр гэж бодсон",
               position: 'middle',
               link: 'http://erkhembileg0803.github.io/historyreflection'
          },
          {
               title: 'AtIelts',
               date: '2025 оны 1-р сар - 2-р сар',
               description: "Сургуулийнхаа ETC (English Training Center)-д зориулсан IELTS дасгалын вэбсайт байх ёстой байсан ч би бага зэрэг ядарсан.",
               position: 'middle',
               link: '#'
          },
          {
               title: 'EduTest',
               date: '2025 оны 2-р сар - 5-р сар',
               description: "Сургуулийнхаа сурагчдад зориулсан шалгалт өгөх, дүнгээ шалгах, багш нарт шинэ шалгалт даалгах боломжтой хийгдэж буй вэбсайт. (deploy хийгээгүй байгаа)",
               position: 'bottom',
               link: '#'
          },
     ])
     return <>
     <div className="homepage">
     <Header/>
     <main>
          <div className='main'>
               <section className='bioContainer'>
                    <article className="bio">
                         <h1>Батзориг Эрхэмбилэг 
                              <div>
                                   <a href='https://www.instagram.com/erkhembilegbatzorig/' target='_blank'><i className="fa fa-instagram"></i></a>
                                   <a href='https://www.facebook.com/HELLOHIHELO/' target='_blank'><i className="fa fa-facebook"></i></a>
                                   <a href='https://github.com/Erkhembileg0803' target='_blank'><i className="fa fa-github"></i></a>
                                   <a href='https://mail.google.com/mail/?view=cm&fs=1&to=b.erkhembileg0803@gmail.com' target='_blank'><i className="fa fa-envelope"></i></a>
                              </div>
                         </h1>
                         <div className='location'>
                         <i class="fa fa-map-marker"></i> Монгол, Улаанбаатар
                         </div>
                         <p>
                             Би front-end мэргэшсэн програм хангамж хөгжүүлэгч, мөн back-end api ашиглан front-end талдаа холбодог. Би вэбсайтыг янз бүрийн дэлгэцийн хэмжээст хариу үйлдэл үзүүлэхэд маш сайн. 
                         </p>
                    </article>
               </section>
               <section className='skillsContainer'>
                     <h1>Ур чадвар</h1> 
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
                    <h1>Туршлага</h1>
                    <article className='experience'>
                         {
                              experience.map(({title, date, description, position, link}) => (
                                   <Experience title={title} date={date} description={description} position={position} link={link}/>
                              ))
                         }
                    </article>
               </section>
               <Projects/> 
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
