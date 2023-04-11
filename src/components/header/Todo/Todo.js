import { useState } from 'react';
import '../Todo/Todo.css'
import TodoOutput from './TodoOutput';
import Header from './Header';
import SubmitButton from './SubmitButton';
import Input from './Input';

export default function Todo(){
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState("");
    const dataInput = (event)=>{
        event.preventDefault();
        setData([...data, inputData]);
        setInputData("");
        console.log(inputData);
    }
    const innerDataChange = (event)=>{
        setInputData(event.target.value);
    }
    const deleteButton = (index) =>{
        const newData = [...data];
        newData.splice(index,1);
        setData(newData);
    }
    console.log(data);
    return(
        <div className='parent'>
            <Header />
            <div className='addtask' >
                <Input inputData = {inputData} handleClick = {innerDataChange}/>
                <SubmitButton handleClick = {dataInput} />
            </div>
            <TodoOutput data = {data} handleClick = {deleteButton} />
            
        </div>   
    )
}