import { useState, useContext } from "react";
import { DataContext } from "../App";
import { categories } from "../Model/categories.json";
export default function Books() {
  if(sessionStorage.getItem("cart")==null){
    sessionStorage.setItem("cart",JSON.stringify([]));
  }
  const { booklist,logStatus } = useContext(DataContext);
  const [books, setBooks] = useState(booklist);
  const [length, setLength] = useState(booklist.length);
  //********************************* */
  function delBook(e){
    var ind=e.target.value;
    alert("We will delete Book #"+ind+" from the database");
    }
//****************************** */
function upDateBook(e){
  var ind=e.target.value;
  alert("We will alter book #"+ind+" from the database");
  }

//***************************** */
function currUpdate(e,element,id){
  var book=books.find(bl=>book.id=id);
  var val=e.target.value;
  if(element==1){book.title=val}
 else if(element==1){book.author=val}
 else if(element==3){book.price=val}
  else{book.category_id=val}
    
}

//********************************* */


  function addToCart(e){
    var id= parseInt(e.target.id);
   var temp=JSON.parse(sessionStorage.getItem("cart"));
   temp.push(books[id]);
   sessionStorage.setItem("cart",JSON.stringify(temp));
    alert(" Add to Cart Called for Book #"+id+"\n cart length is "+temp.length);
  }
  return (
    <div>
      <h1 className="text-3xl">Future Home of Books</h1>
      <h2 className="text-2xl">You have {length} books</h2>
      <div
        id="tableContainer"
        className="h-[40vh] px-50 overflow-y-scroll text-right bg-amber-200"
      >
        <table>
          {books.map((book, index) => (
            <tr key={index}>
              <td className="border-2">
                <input type="text" Defaultvalue={book.title} onChange={(e)=>(currUpdate(e,1,bookid))} />
              </td>
              <td className="border-2">
                <input type="text" Defaultvalue={book.author} onChange={(e)=>(currUpdate(e,2,bookid))} />
              </td>
              <td className="border-2">
                <input type="text" Defaultvalue={book.price} onChange={(e)=>(currUpdate(e,3,bookid))} />
              </td>
              <td className="border-2">
                <select value={book.category_id} onChange={(e)=>(currUpdate(e,4,bookid))}>
                  {categories.map((cat, index2) => {
                    if (book.category_id == cat.id) {
                      return (
                        <option value={cat.id} selected>
                          {cat.category}
                        </option>
                      );
                    } else {
                      return <option value={cat.id}>{cat.category}</option>;
                    }
                  })}
                </select>
              </td>
              {sessionStorage.getItem("admin")==1? <td className="border-2 p-2">
                <button value={index} onClick={delBook}>Delete</button>
                </td>:""}
              {sessionStorage.getItem("admin")==1? <td className="border-2 p-2">
                <button value={index} onClick={updateBook}>Update</button>


                </td>:""}
              {(sessionStorage.getItem("logged")==1 && sessionStorage.getItem("admin")==0) ?
              <td className="border-2 p-2"><input type="button" value="Add to Cart" id={index} onClick={addToCart}/> </td>:""}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
