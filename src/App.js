import React from 'react';
import './App.css';
import{ BrowserRouter, Route,  Routes} from "react-router-dom"
import NavBar from './component/NavBar.js';
import Home from './component/Home.js';
import Categories from './component/Categories.js';
import PetClinic from './component/PetClinic.js';
import PetDayCare from './component/PetDayCare.js';
import PetTraining from './component/PetTraining.js';
const App = () => {
    return ( <>
        <NavBar/>
        <BrowserRouter>
    <Routes>
  <Route path='/home' element={<Home/>}></Route>
  {/* <Route path='/' element={<NavBar/>}></Route> */}
  <Route path='/categories' element={<Categories/>}></Route>
  <Route path='/petclinic' element={<PetClinic/>}></Route>
  <Route path='/petdaycare' element={<PetDayCare/>}></Route>
  <Route path='/pettraining' element={<PetTraining/>}></Route>
    </Routes>
        </BrowserRouter>

    </> );
}
 
export default App;