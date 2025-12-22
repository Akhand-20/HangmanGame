function getButtonStyling(styleType){
    if(styleType==="primary"){
        return "bg-blue-500";
    }else if(styleType==="secondary"){
        return "bg-gray-300";
    }else if(styleType==="error"){
        return "bg-red-600";
    }else if(styleType==="success"){
        return "bg-green-300"
    }else if(styleType==="warning"){
        return "bg-yellow-400"
    }
}

export default getButtonStyling;