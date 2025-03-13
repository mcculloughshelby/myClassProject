
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {useState, createContext} from "react";
import Home from "./Components/Home";
import Books from "./Components/Books";
import {books} from "./Model/Books.json"
import NavBar from './Components/NavBar';
import ContactUs from './Components/Contact';
import Cart from './Components/Cart';
export const DataContext=createContext("");
export default function App() {
  if(sessionStorage.getItem("admin") == null){
    sessionStorage.setItem("admin",0);
  }
  var login=0;
  if(sessionStorage.getItem("logged") != null){
    login=sessionStorage.getItem("logged");
  }
  const [logStatus,setLogStatus]=useState(login);
  const [booklist,setBookList]=useState(books);

  return (

  
    <div className='w-[100vw] h-[100vh] bg-amber-100'>
    <DataContext.Provider value={{logStatus:logStatus, setLogStatus:setLogStatus,booklist:booklist,setBookList:setBookList}}>

         <div className=''> 
          <NavBar/>  
            </div>
       <div className="text-center">
         <BrowserRouter>
           <Routes>

           <Route path="/*" element={<Home/>}/>

             <Route path="/Home" element={<Home/>}/>
             <Route path="/books" element={<Books/>}/>
              <Route path="/ContactUs" element={<ContactUs/>}/>
              <Route path="/cart" element={<Cart/>}/>

           </Routes>

          </BrowserRouter>
       </div>
    
    </DataContext.Provider>
    </div>


   );
}

