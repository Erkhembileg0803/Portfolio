import Header from '../header';
import './aboutpage.scss';
export default function AboutPage() {
     return <div className="aboutpage">
          <Header/>
          <main>
               <div className="main">
                    <section className="aboutme">
                         <h1>Миний Тухай</h1>
                         <div>
                              <p>Би ойролцоогоор нэг жилийн турш Вэб Хөгжүүлэлтээр хичээллэж байна. Би responsive вэбсайтууд хийдэг бөгөөд багтай хамтран ажиллахдаа back end api-г front end-тэй холбож хэрэглэгчдэд вэбсайтыг ашиглах боломжийг олгодог.</p>
                              <p>Би багштайгаа хамтран ажиллаж, front end багийг манлайлан вэбсайт хийдэг.</p>
                              <p>Би <b>энгийн байдал</b>-д дуртай. Учир нь заримдаа вэбсайтууд хэт төвөгтэй, ойлгоход хэцүү байдаг.</p>
                         </div>
                    </section>
               </div>
          </main>
     </div>
}