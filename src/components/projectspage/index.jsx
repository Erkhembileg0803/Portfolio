import './projectspage.scss';
import Projects from '../projects';
import Header from '../header';
export default function ProjectsPage(){
     return <div className='projectspage'>
          <Header/>
          <main>
               <div className="main">
                    <Projects/>
               </div>
          </main>
     </div>
}