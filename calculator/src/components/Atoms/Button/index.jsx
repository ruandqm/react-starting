export default function Button(props) {
    return (
        <div className="col mt-3">
            <button onClick={props.action} type="button" className="btn btn-primary w-100 h-100 pop">
                {props.name}
            </button>
        </div>
    )
}