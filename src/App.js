import logo from './logo.svg';
import './App.css';
import Userregistration from './Component/Userregistration';
import Useravailability from './Component/Useravailability';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <div>
      {/* <div className="App">
        <div className="image">
          <Userregistration />
        </div>
      </div> */}
       <div className='available'>
      <Useravailability/>
      </div>
    </div> 
  );
}

export default App;
