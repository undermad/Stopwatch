import React from 'react';

function SudokuElementValue(props) {
    const value = props.value;

    return (
        <div className={"sudoku-value-container"}>{value}</div>
    );
}

export default SudokuElementValue;