const StudentDestructor = ({studentName, age, email}) => {
    return (
        <div>
            <h3>List of Students by using the Destructuring</h3>
            <p>Name of Student {studentName}</p>
            <p>Age of Student {age}</p>
            <p>Email of Student {email}</p>
        </div>
    )
}
export default StudentDestructor;