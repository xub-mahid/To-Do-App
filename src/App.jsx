
import { useState } from 'react'

function ToDoApp(){
  const [todo,setTodo] = useState("")
  const [list,setList] = useState([])
  const relodOff=(e)=>{
    e.preventDefault()

  }
  const getData=(e)=>{
    setTodo(e.target.value)
    

  }
  const addTask = ()=>{
           if(todo!==""){
            setList([...list,todo])
            setTodo("")
           }
          
          }
  const  deleteF =(index)=>{
   const updatList = list.filter((_,i)=> i!==index)
   setList(updatList)
  }        
 
  return(
    <div  className='h-screen w-full flex justify-center items-center bg-blue-50 '>
     <div className='w-[800px] h-[600px] p-5 rounded-xl bg-white shadow-2xl'>
              <h1 className='text-center m-4 font-extrabold text-3xl tracking-widest font-serif'>TO DO APP</h1>
      <form action="" onSubmit={relodOff}>
      <div className=" m-3 h-[360px] overflow-auto"> 
                <ul>
                  {
                    list.map((taske,index)=>
                      <li key = {index} className='border-b border-black-50 text-center h-15 font-bold  '>
                        <span className=' relative top-7 '>{taske}</span>
                       <div className=''> <button onClick={()=>deleteF(index)} className='transform translate-x-50 font-normal bg-red-600 px-3 py-1 text-white  text-sm rounded'>Delete</button></div>
                    
                      </li>
                    )
                  }
                </ul>
      </div>
      <div className=' transform translate-y-3 w-[750px] h-15 flex justify-center items-center'>
        <input type="text" className='m-7  border-b px-3 focus:outline-0 font-bold ' placeholder='Add Your To Do ' value={todo} onChange={getData} />
        <button className='bg-blue-500 text-white px-5 py-1  rounded hover:bg-red-600' onClick={addTask}>Add</button>
      </div>
      </form>
      </div>


    </div>
  )
}
export default ToDoApp
