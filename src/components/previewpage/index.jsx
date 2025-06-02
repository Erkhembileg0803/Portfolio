import { Link, useParams } from 'react-router-dom';
import Header from '../header';
import './previewpage.scss';
import ProjectInfo from '../projectsinfo';
import { useState, useEffect } from 'react';
export default function PreviewPage(){
     const {id} = useParams();
     const projects = Array.isArray(ProjectInfo[id]) ? ProjectInfo[id] : [ProjectInfo[id]];
     const {title, description, tools, link, img, images, responsive} = projects[0];
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);
     return <div className="previewpage">
          <Header/>
          <main>
               <div className="main">
                    <div className="descriptionContainer">
                         <h1>{title}</h1>
                         <div>{tools.map((tool,index) => (
                              <span key={index}>{tool}</span>
                         ))}</div>
                         <p style={{fontSize: '1.3rem', height: '40px', color: 'gray'}}>Дэлгэцийн хэмжээнд өөрчлөгдөх: <i className={responsive ? 'fa fa-check' : 'fa fa-close'} style={{color: responsive ? 'green' : 'red', padding: '5px'}}></i></p>
                         <p>{description}</p>
                         {link !== '#' ? (<Link className="visit"to={link}>Зочлох</Link>) : (
                              <Link style={{cursor: "not-allowed"}}>Интернетэд хараахан нийтлээгүй байна</Link>
                         )}
                    </div>
                    <div className="imagesContainer">
                         <img className='image' src={img}></img>
                         {images.map((img) => (
                              <img src={img} className='image'></img>
                         ))}
                    </div>
                    <section className='projectsContainer' id='#projects'>
                    <article className='projects'>
                              {
                                   projects.map(({title, tools, description, link, img}, index) => (
                                        <Project key={index} title={title} tools={tools} description={description} link={link} img={img}/>
                                   ))
                              }
                    </article>
               </section>
               </div>
          </main>
     </div>
}
function Project(props){
     const {title, img, tools, description, link} = props;
     return <Link to={link !== '#'? link : ''} className="container" >
               <img src={img}/>
               <div className="info">
                   <h3 className='title'>{title}</h3>
                   {tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                   ))}
                   <p className='description'>{description}</p>
                   <button className='button'>Learn More <i className="fa fa-arrow-right"></i></button>
               </div>
            </Link>
}