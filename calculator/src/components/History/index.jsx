import React, { useEffect, useState } from "react";
import Result from "../Result";

export default function History(props) {

    //const [results, AddResult] = useState([])


    /* useEffect(() => {
        const history = results.slice()
        for (let i = 0; i < values.length; i++) {
            history.push(<Result value={values[i]} />)
        }
        AddResult(history)
    }, [values]) */

    const historyValues = props.values
    /*     console.log(historyValues)*/
    /*  const resultsUl = document.getElementById('results')
     historyValues.forEach(element => {
         const resultNode = document.createTextNode(<Result value={element} />)
         resultsUl.appendChild(resultNode)
     }) */
    const resultsArr = []
    historyValues.forEach(element => {
        resultsArr.push(<Result value={element} />)
    })

    return (
        <>
            <ul>
                {resultsArr}
            </ul>

        </>

    )
}