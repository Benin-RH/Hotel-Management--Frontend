import logo from './logo.svg';
import './App.css';
import Userregistration from './Component/Userregistration';
import Useravailability from './Component/Useravailability';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <div>
          <Userregistration />
      
      
      <Useravailability/>
      
    </div> 
  );
}

export default App;
