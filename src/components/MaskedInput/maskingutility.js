export  function getMaskedString(originalWord,guessedLetters){
    guessedLetters =guessedLetters.map(letter=>letter.toUpperCase())//array mthd is .map()
    //['h','M','e']->['H','M','E]   originalWord = humble
    //if gussed letters ['H','M','E] then return ['H','_','M','_','_','E]

    const guessedLetterSet = new Set(guessedLetters);//made set since good for searching in js 

    const result =originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }else{
            return "_";  
        }
    });//['H','_','M','_','_','E] from this function

    return result; 
}