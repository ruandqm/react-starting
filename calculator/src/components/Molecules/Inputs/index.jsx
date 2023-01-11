import Input from "../../Atoms/Input"

export default function Inputs() {
    return (
        <div className="row m-4">
            <Input id="n1" type="number" />
            <Input id="n2" type="number" />
        </div>
    )
}