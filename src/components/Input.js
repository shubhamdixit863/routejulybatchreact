import React,{useState,useEffect} from 'react'
import Show from './Show';

const Input = () => {
    const [state,setState]=useState("");
    const [todos,setTodos]=useState([]);


   

    const handleChange=(event)=>{

        setState(event.target.value);
        
        }


  
const handleClick=()=>{

      let item=localStorage.getItem("todo");
      if (item){
       // item is not null
       const itemObject=JSON.parse(item);
       itemObject.push(state);
       localStorage.setItem("todo",JSON.stringify(itemObject));


      }
      else{
        const newItems=[];
        newItems.push(state);


        localStorage.setItem("todo",JSON.stringify(newItems));
      }



}

const handleClickState=()=>{

    setTodos([...todos,state]);

}

  return (
    <div className='row'>
        <div className='col-6 offset-3'>

        <input type={"text"}  className={"form-control"} onChange={handleChange}/>

<button className='btn btn-info' onClick={handleClick}>
 Add Todo
</button>

        </div>

     <Show/>


  
    </div>
  )
}

export default Input