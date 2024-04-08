const Student2 = (props) => {
    return (
        <div>
            <h3>List of Students 2</h3>
            <p>Name of Student {props.studentName}</p>
            <p>Age of Student {props.age}</p>
            <p>Email of Student {props.email}</p>
        </div>
    )
}
export default Student2;