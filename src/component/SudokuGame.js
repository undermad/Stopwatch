import React from 'react';
import SudokuElement from "./SudokuElement";

const pattern = "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254";
let board = [[], [], [], [], [], [], [], [], []]

function SudokuGame() {


    function allocateElements() {
        let data = pattern.split('');
        let i = 0;
        for (let j = 0; j < 9; j++) {
            for (let y = 0; y < 9; y++) {
                board[j][y] = data[i];
                i++;
            }
        }
    }

    allocateElements();


    return (
        <div className={"container"}>
            <div className={"grid9x9"}>
                {board.map(arr => {
                    return (
                        arr.map(subItem => {
                            return subItem !== '.' ?
                                <SudokuElement editable={false}
                                               element={subItem}/>
                                : <SudokuElement editable={true} element={subItem}/>
                        })
                    )
                })}
            </div>
        </div>
    );
}

export default SudokuGame;