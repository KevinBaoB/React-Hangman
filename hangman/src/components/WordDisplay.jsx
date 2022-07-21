import words from '../data/words.json'

function WordDisplay(props) {



    let randomWord = ''
    let randomArr = []

    function startGame() {
        let counter = 0;
        const randomArticleIndex = Math.floor(Math.random() * words.length);

        randomWord = words[randomArticleIndex]
        
        props.setPuzzleWord(randomWord)
    }

    randomArr = props.puzzleWord.split('')

    for(let i = 0; i < randomArr.length; i++) {
        if(props.letters.indexOf(randomArr[i]) !== -1) {
            randomArr[i] = '_ '
        }
    }

    if (randomArr.indexOf('_') === -1) {
        alert('You Win!')
    }

    return (
        <div>
            <h2>{randomArr}</h2>
            <button onClick={startGame}>Start Game</button>
        </div>
    )
}

export default WordDisplay