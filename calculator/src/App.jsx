import Calculator from "./components/Organisms/Calculator"

export default function App() {
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
              <Calculator />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

