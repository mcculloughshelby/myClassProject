import './App.css';
import {useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Books from "./Components/Books";
import ContactUs from "./Components/ContactUs";
import {books} from "./Model/Books.JSON";
export const dataContext = createContext();

export default function App() {

  var login=0;
  if(sessionStorage.getItem("logged")!=1){
    login=sessionStorage.getItem("logged");
    
  const [logStatus, setLogStatus]=useState(0);
  const [booklist, setBooklist]=useState(books);

  }
  return (
    <div>
      <dataContext.Provider value={{logStatus, setLogStatus, booklist, setBooklist}}>
        <div className='w-[100vw] h-[100vh] bg-amber-200'>
          <NavBar/>
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/books" element={<Books/>}/>
              <Route path="/contactus" element={<ContactUs/>}/>
            </Routes>
            </BrowserRouter>
    </div>
    </dataContext.Provider>

    </div>
    
  );
}