import {useState, useContext} from "react";
import { DataContext } from "../App";
export default function NavBar(){
  const { booklist,logStatus,setLogStatus } = useContext(DataContext);
const [uname,setUname]=useState("");
const [pwd, setPwd]=useState("");
function check(){
  if(uname.trim()==="admin"  && pwd.trim() === "test")
{
     sessionStorage.setItem("admin",1);
     sessionStorage.setItem("logged",0);

     setLogStatus(2);
}
if(uname.trim()==="user1"  && pwd.trim() === "test")
  setLogStatus(1)
sessionStorage.setItem("logged",1);

}

function logout(){
 sessionStorage.setItem("cart",JSON.stringify([]));
 sessionStorage.setItem("logged",0);
 sessionStorage.setItem("admin",0);
 setLogStatus(0)
 setlogin(0);

}

var login=<div>
  Please enter UserName
   <input className="border-2" type="text" id="uname" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
   <br></br>Please enter Password
   <input className="border-2" type="password" id="pwd" value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
  <br></br>
  <input className="border-2" type="button" value="Login" onClick={check}/>
</div>


var logoutUser=<div >
<a className="p-4" href="cart">Your Cart</a>
<input type="button p-4" value="Logout" onClick={logout}/>
</div>
  return(

    <div className="grid grid-cols-6 bg-blue-100 text-2xl px-10 py-20">
      <div><a href="/Home">Home</a></div>
       <div><a href="/books">Books</a></div>
       
       <div><a href="/contactus">Contact Us</a></div>
       <div> </div>
       <div> {sessionStorage.getItem("admin")==1?<a href="/addBook">Add New Book</a>:""}</div>
       
       <div>{ sessionStorage.getItem("logged")== 0 && sessionStorage.getItem("admin")==0?login:logoutUser}</div>

    </div>
  );


}