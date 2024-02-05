import Toggle from "./toggle"

const ToDoItem = (props) => {
    return (
        <>
        <p>{props.text}</p>
        <Toggle/>
        </>
    )
}

export default ToDoItem