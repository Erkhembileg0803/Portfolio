import { Link } from 'react-router-dom';
import './projects.scss';
import { useState } from 'react';
import ProjectInfo from './projectsinfo';
export default function Projects(){

     return <>
                <section className='projectsContainer' id='#projects'>
                    <h1>Төслүүд</h1>
                    <article className='projects'>
                              {
                                   ProjectInfo.map(({title, tools, description, link, img}, index) => (
                                        <Project title={title} tools={tools} description={description} link={link} img={img} index={index}/>
                                   ))
                              }
                    </article>
               </section>
     </>
}
function Project(props){
     const {title, img, tools, description,link, index} = props;
     return <Link to={`/Portfolio/Preview/${index}`} className="container" >
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