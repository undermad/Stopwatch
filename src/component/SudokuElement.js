import React, {useState} from 'react';
import SudokuElementValue from "./SudokuElementValue";

function SudokuElement(props) {
    let element = props.element;
    let editable = props.editable
    if (element === '.') {
        element = '';
    }

    const [value, setValue] = useState(element);
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [editing, setEditing] = useState(false);
    const [editing1, setEditing1] = useState(false);
    const [editing2, setEditing2] = useState(false);
    const [editing3, setEditing3] = useState(false);
    const [editing4, setEditing4] = useState(false);

    function editingStart(e) {
        if (editable) {
            setEditing(true);
        }
    }

    function editingEnd(e) {
        setValue(e.target.value);
        setEditing(false);
    }


    return (

        <div className={"sudoku-element-wrap"}>

            {editing1 ? <input type={"number"}
                               autoFocus={true}
                               onBlur={e => setEditing1(false)}
                               onInput={(e) => {
                                   setValue1(e.target.value)
                                   setEditing1(false)
                               }}
                               className={"sudoku-input absolute-input s1"}/>

                : <div onClick={() => setEditing1(true)}
                       className={"sudoku-possible-values s1"}>{value1}</div>}

            {editing2 ? <input type={"number"}
                               autoFocus={true}
                               onBlur={e => setEditing2(false)}
                               onInput={(e) => {
                                   setValue2(e.target.value)
                                   setEditing2(false)
                               }}
                               className={"sudoku-input absolute-input s2"}/>

                : <div onClick={() => setEditing2(true)}
                       className={"sudoku-possible-values s2"}>{value2}</div>}

            {editing3 ? <input type={"number"}
                               autoFocus={true}
                               onBlur={e => setEditing3(false)}
                               onInput={(e) => {
                                   setValue3(e.target.value)
                                   setEditing3(false)
                               }}
                               className={"sudoku-input absolute-input s3"}
            /> : <div onClick={() => setEditing3(true)}
                      className={"sudoku-possible-values s3"}>{value3}</div>}

            {editing4 ? <input type={"number"}
                               autoFocus={true}
                               onBlur={e => setEditing4(false)}
                               onInput={(e) => {
                                   setValue4(e.target.value)
                                   setEditing4(false)
                               }}
                               className={"sudoku-input absolute-input s4"}
            /> : <div onClick={() => setEditing4(true)}
                      className={"sudoku-possible-values s4"}>{value4}</div>}

            <div onClick={editingStart}
                 className={editable ? "sudoku-element" : "sudoku-element editable-sudoku-element"}>
                {editing ? <input type={"number"}
                                  autoFocus={true}
                                  onBlur={e => setEditing(false)}
                                  onInput={editingEnd}
                                  className={"sudoku-input"}/>
                    : <SudokuElementValue value={value}/>}

            </div>
        </div>
    );
}

export default SudokuElement;
