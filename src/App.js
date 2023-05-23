import './App.css';
import {useEffect, useState} from "react";
import Board from "./components/Board";

function App() {
    const [board, setBoard] = useState((Array(9).fill(null)));
    const [symbol, setSymbol] = useState('X');
    const [winner, setWinner] = useState(null);
    const [score, setScore] = useState({'X': 0, '0': 0});
    const step = (value, index) => {
        if (value === null) {
            const nextStep = board.map((el, i) => (i === index ? symbol : el));
            setSymbol(symbol === 'X' ? '0' : 'X');
            setBoard(nextStep);
        }
    };
    const checkWinner = () => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];

            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                setWinner(board[a]);

                if (board[a] === 'X') {
                    const newScore = {...score, 'X': score['X'] + 1}
                    setScore(newScore)
                } else {
                    const newScore = {...score, '0': score['0'] + 1}
                    setScore(newScore)
                }
            }
        }
    };
    const restart = () => {
        setBoard(board.map(el => null))
        setWinner(null)
        setSymbol('X')
    };
    useEffect(() => {
        checkWinner()
    },[board])
    useEffect(() => {
        if (winner !== null) {
            setTimeout(() => {
                restart()
            }, 2000)
        }
    },[winner])

    return (

        <div className="App">
            <h2>TIC-TAC-TOE</h2>
            <Board
                board={board}
                step={step}
                winner={winner}
            />
            {winner && <h3>Congratulation, {winner} has won! </h3>}
            <div> X:{score['X']} </div>
            <div> 0:{score['0']}</div>
        </div>
    );
}

export default App;
