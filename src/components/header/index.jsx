import { Link } from 'react-router-dom';
import './header.scss';

export default function Header(){
     return <header>
          <h2 className='name'>Erkhembileg <span>Batzorig</span></h2>
          <div className="links">
               <Link>About</Link>
               <Link>Skills</Link>
               <Link>Projects</Link>
               <Link>Contacts</Link>    
          </div>
     </header>
}