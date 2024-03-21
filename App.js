import React, { useState } from 'react'

function App()
{
  //map-add
  //filter-delete
  //find-edit
  //SPLICE -edit
  const[task,setTask]=useState("");
  const [tasklist,setTasklist]=useState([]);
  const [updatee,setupdatee]=useState(false);
  const[id,setId]=useState("");
  const addButton=()=>{
setTasklist([...tasklist,task]);
setTask("");
  }
  console.log(tasklist);
  const Delete=(id)=>{
    setTasklist([...tasklist].filter((ele,eleid)=>eleid!==id))
  }
  const edit=(id)=>{
const item= tasklist.find((ele,eleid)=>eleid===id)
setupdatee(!updatee);
setTask(item);
setId(id);
  }
  const editButton=()=>{
   tasklist.splice(id,1,task)
   console.log(tasklist);
   setupdatee(!updatee);
   setTask("");
  }
  return (
    <>
    <div style={{marginLeft:"550px",marginTop:"250px",border:"solid 2px grey",width:"250px",padding:"30px",backgroundColor:"#74C5D3"}}>
     {updatee ? <input placeholder="Add in Todo list" onChange={(e)=>setTask(e.target.value)} value={task}/>
    : <input placeholder="edit in Todo list" onChange={(e)=>setTask(e.target.value)} value={task}/>}
     {updatee ? <button onClick={addButton}>Add</button>
      : <button onClick={editButton}>update</button>}
     <br/>
     {tasklist.map((item,index)=>(
      <li style={{marginTop:"5px",color:"white",display:"flex"}}>{item} <span style={{color:'blue'}} onClick={()=>(edit(index))}>Edit</span> <span style={{color:'red'}} onClick={()=>Delete(index)}>delete</span></li>
     ))}
    </div>
    </>
  )
}
export default  App;