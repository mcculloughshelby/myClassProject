import { BrowserRouter,Routes, Route } from "react-router-dom";
import {useState, useContext} from "react";
import { dataContext } from "../App";
import {categories} from "../Model/categories.JSON";

import "../App.css";

//export const BookContext = createContext();
export default function Books(){
   const {booklist}=useContext(dataContext);
    return(
      
                <div>
                <h1 className='text-3xl'>Future Home of Books</h1>
                <h2 className='text-2xl'>You have {books.length} books.</h2>
                <ul className="text-left text-2xl">
                    {booklist.map((book,index)=>{<li value={index}>{book.title}</li>})}
                </ul>
                </div>
    )
    
            
    
    
    }