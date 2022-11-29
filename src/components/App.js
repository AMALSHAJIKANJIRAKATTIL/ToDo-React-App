import React, { useState } from "react";
import "./../styles/App.css";

function App() 
{

	const [list,setlist]=useState([]);
	const [todo,settodo]=useState("")

	return (
	<div id="main">
		<div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} type="text" placeholder="🖊️ Add item..." onChange={(e)=>{settodo(e.target.value)}} />
        <i className="fas fa-plus" onClick={(e)=>{setlist([...list,{id:Date.now(),value:todo,status:false}]); settodo('')}}></i>
      </div>
{
	list.map((obj,id)=>{
	return (
      <div key={id} className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" onChange={(e)=>{list.filter(obj2=>{if(obj2.id===obj.id){obj.status=e.target.checked};  setlist([...list]);}) }}/>
            {obj.status?<s><p>{obj.value}</p></s>:<p>{obj.value}</p>}
          </div>
		  
            
          
          <div className="right">
		  <i className="fas fa-edit float-right" onClick={(e)=>{ settodo(obj.value); setlist([...list.filter(del=>{return del.id!=obj.id;})])}} ></i>
            <i className="fas fa-close" onClick={(e)=>{ setlist([...list.filter(del=>{return del.id!=obj.id;})])} }></i>
          </div>
        </div>
      </div>
	)
})
}
	</div>
	</div>
	);
}


export default App;
