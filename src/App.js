import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Blog from './Blog';
import Cities from './Cities';
import Drive from './Drive';
import Help from './Help';
import Partner from './Partner';
import Signup from './Signup';
function App() {
  return (
    <div className="App">
     <h2>Tsk2</h2>
     <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route path='Blog' element={<Blog/>}></Route>
      <Route path='Cities' element={<Cities/>}></Route>
      <Route path='Drive' element={<Drive/>}></Route>
      <Route path='Help' element={<Help/>}></Route>
      <Route path='Partner' element={<Partner/>}></Route>
      </Route> 
     </Routes>
     <Signup/>
     
    </div>
  );
}

export default App;
