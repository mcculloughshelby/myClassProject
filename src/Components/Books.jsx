import { BrowserRouter,Routes, Route } from "react-router-dom";
import {useState, useContext} from "react";
import { dataContext } from "../App";
import {categories} from "../Model/categories.JSON";
import AddBook from "./AddBook";
import "../App.css";

//export const BookContext = createContext();
export default function Books(){
    const {logStatus,booklist,setBookList}=useContext(dataContext);

    const [books,setBooks]=useState(booklist);
    const [currBook, setCurrBook]=useState(booklist[0]);
    function deleteBook(e){
        var bookIndex=parseInt(e.target.id);
        var list=books;
        list.splice(bookIndex,1);
        setBooks(list);
        setBookList(list):
    }
    function updateBook(e){
    }

    return(
      
                <div>
                <h1 className='text-3xl'>Future Home of Books</h1>
                <h2 className='text-2xl'>You have {books.length} books.</h2>
                </div>
    )
    const [books,setBooks]=useState([booklist]);
    const [currBook, setCurrBook]=useState();
            
    
    
    }