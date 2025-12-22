function TextInput({type="text",label,placeholder="enter your input here",onChangeHandler}){//here type is the type of input and "text" is given as default
    return (
        <label>
            <span className="text-gray-700">{label}</span>

            <input 
                type={type} 
                className="px-4 py-2 border border-gray-800 rounded-md w-full"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </label>
    )
}

export default TextInput;