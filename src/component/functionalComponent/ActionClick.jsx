
const ActionClick = () =>{
    const myName = "Tilak";
    function handleClick(){
        alert(`Thank you  ${myName} for click me.`);
    }
    return (
        <div>
            <h2>Title </h2>
            <p>Paragraph</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default ActionClick;
