
import Button from "../Button/button";
import TextInput from "../TextInput/textinput";

function TextInputForm({handleFormSubmit,handleInputChange,handleShowHideClick,inputType}){
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label="Enter a word or phrase"
                    placeholder="Enter Your Magic Words..."
                    onChangeHandler={handleInputChange}/>
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType==="password"?"Show":"Hide"}
                    onClickHandler={handleShowHideClick}/>
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )
}

export default TextInputForm;