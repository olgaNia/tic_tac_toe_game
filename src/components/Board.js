import React from 'react';
import Square from "./Square";

const Board = (props) => {
    return (
        <div className="board">
            {props.board.map((el, index) =>
                <Square value={el}
                        step={props.step}
                        index={index}
                        winner={props.winner}
                />)}
        </div>
    );
};

export default Board;