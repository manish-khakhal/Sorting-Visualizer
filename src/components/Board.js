import React from 'react'
import Single_ele from './Single_ele'

function Board(props){
    // console.log(props);
    const showArrNow = () => {
        return (<>{
            props.arr.map((item, id) => {
                return <Single_ele key={id} value={item} color="black" bgc="white" />
            })
        }</>);
    }
    return (<>
        <div className="sh">{showArrNow()}</div>
    </>);
}
export default Board;