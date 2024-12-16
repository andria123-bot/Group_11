import { useState } from "react";
import { v4 } from 'uuid';
const GradeTracker = () => {
  const [students, setStudents] = useState([]);;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(e.target.value) > 100 || Number(e.target.value) < 0){
      alert("Invalid grade. Grade should be between 0 and 100.");
      return;
    }
    const student = {
      id: v4(),
      name: e.target.name.value,
      grade: parseInt(e.target.grade.value),
    }
    setStudents([...students, student]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter student's name" />
        <input type="number" name="grade" placeholder="Enter student's grade" />
        <button>Add Student</button>
      </form>
      <ul>
        {
          students.map((student) => {
            return <li key={student.id}>{student.name}: {student.grade} - {student.grade >= 50 ? "Good" : "Bad"}</li>
          })
        }
      </ul>
    </div>
  )
}

export default GradeTracker;