import React, { useState, useEffect } from "react"
import Inputs from "../../Molecules/Inputs"
import Buttons from "../../Molecules/Buttons"
import History from "../../Molecules/History"

export default function Calculator() {
  const [result, setResult] = useState(0)
  const [historyResults, setHistory] = useState([])

  useEffect(() => {
    const historySend = historyResults.slice()
    historySend.push(result)
    setHistory(historySend)
  }, [result])

  function somar() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = parseFloat(input1.value)
    let n2 = parseFloat(input2.value)

    let resultado = n1 + n2

    setResult(resultado)
  }

  function subtrair() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = parseFloat(input1.value)
    let n2 = parseFloat(input2.value)

    let resultado = n1 - n2

    setResult(resultado)
  }

  function multiplicar() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = parseFloat(input1.value)
    let n2 = parseFloat(input2.value)

    let resultado = n1 * n2

    setResult(resultado)
  }
  function dividir() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = parseFloat(input1.value)
    let n2 = parseFloat(input2.value)

    let resultado = n1 / n2

    setResult(resultado)
  }
  return (
    <div className="card shadow-lg">
      <div className="card-body p-5">
        <p className="text-muted text-center mb-5">Digite dois números e escolha a operação a ser
          realizada.
        </p>
        <Inputs />
        <Buttons actions={{ somar, subtrair, multiplicar, dividir }} />
        <div className="row justify-content-center mt-4">
          <div className="col mt-3 text-center">
            <h3>Resultado: {result}</h3>
          </div></div>
      </div>
      <History values={historyResults} />
    </div>
  )
}