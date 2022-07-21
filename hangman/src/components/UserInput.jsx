import WordDisplay from './WordDisplay';
import {useState} from 'react';


function UserInput(props) {

    const [puzzleWord, setPuzzleWord] = useState('')


    function gameOver() {
        console.log(props.guess.length)
        if(props.guess.length == 5) {
            alert('GAME OVER!')
            setInterval(document.location.reload(), 5000)
        }
    }


    function clickHandler() {
        let input = document.getElementById('user-input').value

        if(props.letters.indexOf(input) !== -1 && puzzleWord.indexOf(input) !== -1) {

            props.setLetters((letter) => letter.filter((_, index) => index !== props.letters.indexOf(input)))

            console.log('true')
            document.getElementById('user-input').value = ''
        }
         else if(props.letters.indexOf(input) !== -1) {
            props.setGuess([...props.guess, input + " "])
            props.setLetters((letter) => letter.filter((_, index) => index !== props.letters.indexOf(input)))
         }
        
        else {
            console.log('false')
            alert('Letter Already Guessed!')
            
        }

        gameOver()
    }

    return ( 
        <div>
            <WordDisplay letters={props.letters} puzzleWord={puzzleWord} setPuzzleWord={setPuzzleWord}/>
            <input id='user-input' type='text' placeholder="Guess" maxLength='1' />

            <button onClick={clickHandler}>
                Submit
            </button>
        </div>
        
     )

}
 
export default UserInput