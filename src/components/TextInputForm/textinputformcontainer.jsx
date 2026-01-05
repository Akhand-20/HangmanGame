import { useState } from "react";
import TextInputForm from "./textInputForm";
import { useNavigate } from "react-router-dom";
function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");//this is used to toggle the show/hide button 
    const [value,setValue]=useState("");//this is used to catch the value whatever user types so that we can use it on the next page for guessing 
    
    const navigate=useNavigate();//will redirect from one page to another an hook -gives navitaor function  



    function handleFormSubmit(event){
        event.preventDefault();//default behaviour na ho execute mtlb ki form ka default hai refresh honaaa vo na ho
        console.log("Form Submitted",value);//here value is being stored so that we can further use it  
        if(value){
            navigate(`/play`,{state:{wordSelected:value}})            
        }
    }


    function handleInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick(){
        console.log("hogava pirint")
        if(inputType==="password"){
            setInputType("text")
        }else{
            setInputType("password")
        }
        console.log(inputType);
    }


    return <TextInputForm
                inputType={inputType}
                handleFormSubmit= {handleFormSubmit}
                handleInputChange={handleInputChange}
                handleShowHideClick={handleShowHideClick}/>
                
}

export default TextInputFormContainer;