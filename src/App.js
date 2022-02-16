import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './componnets/Home';
import User from './componnets/User';

// import './style/form.css'

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path='/user' element={<User/>}></Route>
       
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
