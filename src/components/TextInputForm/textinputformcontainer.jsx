import { useState } from "react";
import TextInputForm from "./textInputForm";
function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");

    function handleFormSubmit(event){
        event.preventDefault();//default behaviour na ho execute mtlb ki form ka default hai refresh honaaa vo na ho
        console.log("Form Submitted") 
    }


    function handleInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);
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