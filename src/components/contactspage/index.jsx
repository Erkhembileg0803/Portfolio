import './contactspage.scss';
import Header from '../header';
import { Link } from 'react-router-dom';
export default function ContactsPage(){
     const links = [
          {    title: "Facebook",
               icon: 'fa fa-facebook',
               description: 'erkhembileg batzorig',
               link: 'https://www.facebook.com/HELLOHIHELO/',
          },
          {
               title: 'Instagram',
               icon: 'fa fa-instagram',
               description: 'erkhembileg batzorig',
               link: 'https://www.instagram.com/erkhembilegbatzorig/',
          },
          {
               title: "Gmail",
               icon: 'fa fa-envelope',
               description: 'b.erkhembileg0803@gmail.com',
               link: 'https://mail.google.com/mail/?view=cm&fs=1&to=b.erkhembileg0803@gmail.com'
          },
     ]
     return <div className="contactspage">
           <Header/>
          <main>
               <div className="main">
                   <div className="container">
                    <h1>Холбоо барих</h1>
                    <p>Та надтай И-мэйл, Фэйсбүүк эсвэл Инстаграмаар холбогдох боломжтой. Би ихэвчлэн нэг өдрийн дотор хариу өгдөг.</p>
                    <div className="links">
                         {links.map(({title,icon,description,link}) => (
                              <Anchor title={title} icon={icon} description={description} link={link}/>
                         ))}
                    </div>
                   </div>
               </div>
          </main>
     </div>
}
function Anchor(props){
     const {title, icon, description, link} = props;
      return  <Link className="link" to={link} target='_blank'>
          <i className={icon}></i>
          <h3>{title}</h3>
          <p>{description}</p>
      </Link>
}