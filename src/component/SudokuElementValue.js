import React from 'react';

function SudokuElementValue(props) {
    const value = props.value;
    const editable = props.editable

    return (
        <div className={editable ? "sudoku-value-container" : "sudoku-uneditable-value-container"}>{value}
        </div>
    );
}

export default SudokuElementValue;