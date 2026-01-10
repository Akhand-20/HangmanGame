const alphabets= "QWERTYUIOPASDFGHJKLZXCVBNM".split('')

function LetterButtons({text,guessedLetters,onLetterClick,disabled}){

    const originalLetters = new Set(text.toUpperCase().split(''));

    const guessedLettersSet = new Set (guessedLetters);


    //button styling 
    const buttonStyle=function(letter){
        if(guessedLettersSet.has(letter)){//guess kare hue letter bhi do tarah ke ho skate hai shi guess galat guess 
            return `${originalLetters.has(letter) ? 'bg-green-300':'bg-red-300'}`
        }else{
            return 'bg-blue-400';
        }
    }

    function handleLetterClick(event){
        const characterOfTheLetter=event.target.value;
        onLetterClick?. (characterOfTheLetter)//here ?. is called optional chaining it is used ki jb onLetterClick valid arguments ke saath exist karta ho tb ham use call karenge with that argument 
    }

    const buttons = alphabets.map(letter=>{
        return(
            <button
                key={`button-${letter}`} 
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)||disabled}
                className={`h-12 w-12 m-1 rounded-md text-white ${buttonStyle(letter)}`}>{/* here key is like button-A,button-B,button-C -:used so that react does not get confused while rendering  */}
                {letter}
            
            </button>
        )
    })

    return(
        <>
            {buttons}
        </>
    )
    
}

export default LetterButtons;