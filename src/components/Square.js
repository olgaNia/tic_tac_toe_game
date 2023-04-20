import React from 'react';

const Square = (props) => {
    return (
        <button className="square" disabled={props.winner}
        onClick={()=> props.step(props.value,props.index)}>
            {props.value}
        </button>
    );
};

export default Square;