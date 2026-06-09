import { Link } from 'react-router-dom';
import students from '../data/data';  

function Home() {
  console.log('students:', students); 
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Profiles</h1>
      {students.map((student) => (
        <Link key={student.id} to={`/topic/${student.id}`}>
          <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;