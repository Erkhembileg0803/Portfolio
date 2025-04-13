import Header from '../header';
import './homepage.scss';
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
                              17 years old software developer.
                         </p>
                    </article>
               </section>
               <section className='skillsContainer'>

               </section>
          </div>
     </main>
     </div>
     </>
}