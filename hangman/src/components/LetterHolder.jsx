import {useState} from 'react';
import UserInput from './UserInput';


function LetterHolder(){

    const [letters, setLetters] = useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])

    const [guess, setGuess] = useState([])



    return ( 
        <div>

            <span><h3>Letters Remaining: </h3></span>
            {letters.map((letter, index) => (
                <span key={index} >{letter} </span>
            )
            )}
            <UserInput setLetters={setLetters} setGuess={setGuess} letters={letters} guess={guess}/>
            <h1>Letters Guessed: {guess}</h1>
        </div>
     )
}
 
export default LetterHolder;