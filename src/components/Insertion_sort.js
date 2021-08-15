import React, { useState } from 'react'
import Deshboard from './Deshboard'
import Single_ele from './Single_ele';

function Insertion_sort() {
    const [sortingArray, setsortingArray] = useState([]);

    const sortarray = (array) => {
        //sort array of numbers in js
        // array.sort(function (a, b) { return a - b });
        // console.log(array);

            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < (array.length - i - 1); j++) {
                        // if (array[j] > array[j + 1]) {
                        //     var temp = array[j];
                        //     array[j] = array[j + 1];
                        //     array[j + 1] = temp;
                        // }
                        setTimeout(() => {
                            console.log(i,j);
                        }, 1000);
                        
                        // setsortingArray(array);
                        // sortingArray.map((item, id) => {
                        //     <Single_ele key={id} value={item} color="red" bgc="black" />
                        //     })
                }
            }
           
       
    }


    return (<>
        <Deshboard sort_type="Insertion Sort" sort={sortarray} />
    </>);
}

export default Insertion_sort;