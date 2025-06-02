import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

export default function Header(){
     const [respMenu, setMenu] = useState(false);
     return <header>
          <h2 className='name'><Link to='/Portfolio'>Эрхэмбилэг</Link> <span>Батзориг</span></h2>
          <div className="links">
               <Links/>
          </div>
          <i class="fa fa-bars" id='menuBtn' onClick={() => setMenu(!respMenu)}></i>
          {respMenu && <div className="responsiveMenu">
               <Links/>
          </div>}
     </header>
}

function Links(){
     return <>
     <Link to='/Portfolio/'>Нүүр</Link>
          <Link to='/Portfolio/About'>Тухай</Link>
          <Link to='/Portfolio/Projects'>Төслүүд</Link>
          <Link to='/Portfolio/Contacts'>Холбоо барих</Link>    
     </>
}