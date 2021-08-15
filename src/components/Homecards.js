import React from 'react'
import Card from './Card'

function Homecards() {
    return (<>
        <div className="w3-row-padding w3-center w3-margin-top w3-margin-bottom">
        
            <Card sort_type="Bubble Sort" sort_image="https://picsum.photos/200/300?grayscale" best_tc="O(nlogn)"
            avg_tc="O(n^2)" link="/bubble_sort" />

            <Card sort_type="Insertion Sort" sort_image="https://picsum.photos/200/300?grayscale" best_tc="O(n)"
            avg_tc="O(Nlog(N))" link="/insertion_sort" />


        </div>
        <br />
        <br />
    </>);
}

export default Homecards;