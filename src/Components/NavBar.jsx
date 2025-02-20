import {useState, useContext} from "react";
import {dataContext} from "../App";
export default function NavBar(){
const [uname,setUname]=useState("");
const [pwd, setPwd]=useState("");
const {login, setlogin}=useContext(sessionStorage.getItem("logged")!=null?sessionStorage.getItem("logged"):0);
//const {logStatus, setLogStatus}=useContext(dataContext);
var logSt=0;
if (sessionStorage.getItem("logged")!=null){
  logSt=sessionStorage.getItem("logged");
  setlogin(1);
  alert(sessionStorage.getItem("logged"));
}

function check(){
if(uname.trim()==="user1"  && pwd.trim() === "test")
  //setLogin(1); //shared method for log status
  sessionStorage.setItem("logged",1);
}

function logout(){
 // setLogin(0); //shared method for log status
 sessionStorage.setItem("logged",0);
 alert (sessionStorage.getItem("logged"));

 
}


var loginForm=<div>
  Please enter UserName
   <input className="border-2 border-cyan-600" type="text" id="uname" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
   <br></br>Please enter Password
   <input className="border-2 border-cyan-600" type="password" id="pwd" value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
  <br></br>
  <input className="border-2 border-cyan-600" type="button" value="Login" onClick={check}/>
</div>


var logoutUser=<div>
You are logged Out
<input type="button" value="Logout" onClick={logout}/>
</div>
  return(

    <div className="grid grid-cols-6 bg-blue-100 text-2xl px-10 py-20">
      <div><a href="/Home">Home</a></div>
       <div><a href="/books">Books</a></div>
       
       <div><a href="/contactus">Contact Us</a></div>
       <div> </div>
       <div> </div>
       <div>{logSt==0?loginForm:logoutUser}</div>
    </div>
  );


}