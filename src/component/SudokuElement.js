import React, {useState} from 'react';
import SudokuElementValue from "./SudokuElementValue";

function SudokuElement(props) {
    let element = props.element;
    let editable = props.editable
    if (element === '.') {
        element = '';
    }

    const [value, setValue] = useState(element);
    const [editing, setEditing] = useState(false);

    function editingStart(e) {
        if (editable) {
            setEditing(true);
            e.target.focus();
        }
    }

    function editingEnd(e) {
        if (e.target.autoFocus === false) {
            setValue(value)
        }
        setValue(e.target.value);
        setEditing(false);
    }


    return (
        <div onClick={editingStart} className={editable ? "sudoku-element" : "sudoku-element editable-sudoku-element"}>
            {editing ? <input type={"number"}
                              autoFocus={true}
                              onBlur={e => setEditing(false)}
                              onInput={editingEnd}
                              className={"sudoku-input"}/>
                : <SudokuElementValue value={value}/>}
        </div>
    );
}

export default SudokuElement;