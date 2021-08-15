import React, { useState } from 'react'
import Deshboard from './Deshboard'
import Board from './Board';


function Bubble_sort() {
    const [showArray, setshowArray] = useState([])

    function sortarray(array){
        // array.sort() for array of string and below is for array of numbers;
        // array.sort(function (a, b) { return a - b });
         
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < (array.length - i - 1); j++) {
                (function (i, j) {
                    setTimeout(function () {
                        if (array[j] > array[j + 1]) {
                            var temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                        // console.log(array);
                        // <Board arr={array} />
                        setshowArray(array);
                        document.getElementById('bod').innerHTML="<Board arr={showArray}/>";
                    }, 1000 * (((10 * i) + j) + 1));
                })(i, j);
            }
        }
    }

        return (<>
            <Deshboard sort_type="Bubble Sort" sort={sortarray} showArray={showArray} setshowArray={setshowArray} />
        </>);
    }

export default Bubble_sort;