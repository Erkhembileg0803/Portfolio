import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <>
    <Router/>
  </>
}
function Router(){
  return <BrowserRouter>
  <Routes>
  <Route path='/Portfolio' element={<Homepage/>}></Route>
  
  </Routes>
  </BrowserRouter>
}
export default App;
