import Button from "../../Atoms/Button"

export default function Buttons({ actions }) {
    return (
        <div className="row justify-content-center align items-center m-4">
            <Button action={actions.somar} name="Somar" />
            <Button action={actions.subtrair} name="Subtrair" />
            <Button action={actions.multiplicar} name="Multiplicar" />
            <Button action={actions.dividir} name="Dividir" />
        </div>
    )
}