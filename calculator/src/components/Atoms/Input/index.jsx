export default function Input(props) {
    return (
        <div className="col">
            <input id={props.id} type={props.type} className="form-control"></input>
        </div>
    )
}