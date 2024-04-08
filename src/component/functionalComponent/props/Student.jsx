const Student = (props) => {
    return (
        <div>
            <h3>List of Students</h3>
            <p>Name of Student {props.studentName}</p>
            <p>Age of Student {props.age}</p>
            <p>Email of Student {props.email}</p>
        </div>
    )
}
export default Student;