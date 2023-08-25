import { useEffect, useState } from "react";
const Tic = () => {
    const createBoard = () => {
        let array = []
        for(let i = 0; i < 3; i++){
            array.push([])
            for(let j = 0; j < 3; j++){
                array[i].push(null)
            }
        }
        return array;
    }

    const [board, setBoard] = useState(createBoard)
    const [playerOne, setPlayerOne] = useState('X')
    const [playerTwo, setPlayerTwo] = useState('O')
    const [currentPlayer, setCurrentPlayer] = useState(playerOne)
    const checkWin = () => {
        let count = 0  
        for(let i = 0; i < 3; i++){
            count = 0
            for(let j = 0; j < 3; j++){
                if(board[i][j] === 'X'){
                    count+= 1
                    count === 3 ? console.log('Player One Wins') : null
                }else if(board[i][j] === 'O'){

                }
            }
        }
    }
    const handleClick = () => {
        const newBoard = [...board]
        const x = Number(event.target.id[0])
        const y = Number(event.target.id[3])
        if(currentPlayer === playerOne){
            newBoard[x][y] === null ? newBoard[x][y] = "X" : alert('Cell picked already');
            setCurrentPlayer(playerTwo)
        }else{
            newBoard[x][y] === null ? newBoard[x][y] = "O" : alert('Cell picked already');
            setCurrentPlayer(playerOne)
        }
        setBoard(newBoard)
    }
    useEffect(() => {
        checkWin()
        console.log('no')
    }, [board])
    return(
        <div>
            <div id='board'>
                {board.map((column, i) => column.map((row, j) => {return <div key={`${i}-${j}`} id={`${i}, ${j}`} className="cells" onClick={handleClick}>{row}</div>}))}
            </div>
        </div>
    )
}
export default Tic;