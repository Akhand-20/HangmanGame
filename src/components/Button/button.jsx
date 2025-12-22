import getButtonStyling from "./getButtonStyle";

function Button({text, onClickHandler,styleType="primary",type="button" }){//here we expect props means properties 

    console.log(text)
    return (
        <button
            onClick= {onClickHandler}
            type={type}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}

            
        > 
            {text}
        </button>
    );
}


export default Button;