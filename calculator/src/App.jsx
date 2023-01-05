import React from 'react'
import { useState } from 'react'

export default function App() {
  const [result, setResult] = useState(0)
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
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div clas="col justify-content-center text-center">
            <div className="text-center mb-5">
              <h2>Calculadora em Javascript</h2>
            </div>
          </div>
        </div>
        <section className="h-100 bg mt-2">
          <div className="container h-100%">
            <div className="row justify-content-sm-center align-items-center">

              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <p className="text-muted text-center mb-5">Digite dois números e escolha a operação a ser
                    realizada.
                  </p>
                  <div className="row m-4">
                    <div className="col">
                      <input id="n1" type="number" className="form-control"></input>
                    </div>
                    <div className="col">
                      <input id="n2" type="number" className="form-control"></input>
                    </div>
                  </div>
                  <div className="row justify-content-center align items-center m-4">
                    <div className="col mt-3">
                      <button onClick={somar} type="button" className="btn btn-primary w-100 h-100 pop">
                        Adicionar
                      </button>
                    </div>
                    <div className="col mt-3">
                      <button onClick={subtrair} type="button" className="btn btn-primary w-100 h-100 pop">
                        Subtrair </button>
                    </div>
                    <div className="col mt-3">
                      <button onClick={multiplicar} type="button"
                        className="btn btn-primary w-100 h-100 pop">
                        Multiplicar
                      </button>
                    </div>
                    <div className="col mt-3">
                      <button onClick={dividir} type="button" className="btn btn-primary w-100 h-100 pop">
                        Dividir
                      </button>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-4">
                    <div className="col mt-3 text-center">
                      <h3>Resultado: {result}</h3>
                    </div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

