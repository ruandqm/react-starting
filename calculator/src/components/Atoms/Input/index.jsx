import withHover from "../../HOCs/withHover"

function Input(props) {
    return (
        <div className="col">
            <input id={props.id} type={props.type} onMouseOver={props.onHover} onMouseOut={props.onHover} className="form-control"></input>
            {props.hover ? <div>Hover</div> : null}
        </div>
    )
}

export default withHover(Input)