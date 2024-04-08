import './App.css';
import EventHandling from './component/EventHandling';
import ClassComponent from './component/classComponents/ClassComponents';
import ActionClick from './component/functionalComponent/ActionClick';
import WelComeToArrow from './component/functionalComponent/ArrowFunction';
import StudentDestructor from './component/functionalComponent/destructor/StudentDestructor';
import Student from './component/functionalComponent/props/Student';
import Student2 from './component/functionalComponent/props/Student2';
import StudentWithArray from './component/functionalComponent/props/StudentWithArray';
import WelComeToPros from './component/functionalComponent/props/WelComeToProps';
import Employee from './component/hooks/Employee';
import User from './component/hooks/User';


function App() {
  const students2 = {
    studentName: "Tilak Basnet",
    age: '26',
    email: 'tilakbasnet@gmail.com'
  }
  const skill = [' C ', ' Java ' , ' JavaScript ', 'Python ', ' Database'];
   return (
    <div className="App">
      <header className="App-header">
        <WelComeToArrow/>
        <WelComeToPros name = "Tilak"/>
        <ClassComponent/>
        <ActionClick/>
        <Student studentName = "Tilak Basnet" age = '30' email = "tilakbasnet@gmail.com"/>
        <Student2 studentName = {students2.studentName} age = {students2.age} email = {students2.email} />
        <Student2 {...students2} />
        <StudentWithArray data = {skill}/>
        <StudentDestructor  {...students2} />
        <Employee/>
        <User/>
        <EventHandling/>
      </header>
    </div>
  );
}
export default App;
