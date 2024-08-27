import logo from './logo.svg';
import './App.css';
import Userregistration from './Component/Userregistration';
import Useravailability from './Component/Useravailability';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Forgot2 from './Component/Forgot2';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Userlogin from './Component/Userlogin';
function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
      <Route path="userreg" element={<Userregistration/>}/>
      <Route path="useravl" element={<Useravailability/>}/>
      <Route path="userlogin" element={<Userlogin/>}/>
      </Routes>
    </div> 
    </BrowserRouter>
  );
}

export default App;
