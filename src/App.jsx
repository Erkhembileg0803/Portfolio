import logo from './logo.svg';
import './App.scss';
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/aboutpage';
import ProjectsPage from './components/projectspage';
import ContactsPage from './components/contactspage';
import PreviewPage from './components/previewpage';

function App() {
  return <>
    <Router/>
  </>
}
function Router(){
  return <BrowserRouter>
  <Routes>
  <Route path='/Portfolio' element={<Homepage/>}></Route>
  <Route path='/Portfolio/About' element={<AboutPage/>}></Route>
  <Route path='/Portfolio/Projects' element={<ProjectsPage/>}></Route>
  <Route path='/Portfolio/Contacts' element={<ContactsPage/>}></Route>
  <Route path='/Portfolio/Preview/:id' element={<PreviewPage/>}></Route>
  </Routes>
  </BrowserRouter>
}
export default App;
