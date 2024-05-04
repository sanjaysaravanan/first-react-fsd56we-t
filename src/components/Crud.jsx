import PropTypes from "prop-types";
import { useState } from "react";
const data = [
  {
    id: 1,
    name: "John Doe",
    grade: "10th Grade",
    image: "https://www.assuredoccu.com/wp-content/uploads/2021/10/student.jpg",
    isSenior: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    grade: "9th Grade",
    image:
      "https://i.pinimg.com/236x/be/f4/ae/bef4aeccbc14c1964ebb6a50e6255f51.jpg",
    isSenior: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    grade: "11th Grade",
    image:
      "https://pbs.twimg.com/profile_images/1087449724783812611/6cqiEHCV_400x400.jpg",
    isSenior: false,
  },
];

const Student = (props) => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        padding: "16px",
        position: "relative",
        margin: 8,
      }}
    >
      {props.isSenior && (
        <i
          className="fa-solid fa-person-digging fa-2x"
          style={{ position: "absolute", top: 10, right: 10 }}
        ></i>
      )}
      <img
        alt={props.name}
        style={{ height: "200px", width: "300px" }}
        src={props.image}
      />
      <h3>{props.name}</h3>
      <h4>{props.grade}</h4>
      <button onClick={() => props.deleteStudent(props.id)}>Delete</button>
      <button onClick={() => {}}>
        Change to {props.isSenior ? "Junior" : "Senior"}
      </button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  grade: PropTypes.string,
  isSenior: PropTypes.bool,
  image: PropTypes.string,
  deleteStudent: PropTypes.func,
};

// Crud for Students
const Crud = () => {
  // Read all the students
  const [students, setStudents] = useState(data);

  // Delete the Student
  const deleteStudent = (stuId) => {
    // filter only the students whose id is not stuId
    const temp = students.filter((stu) => stu.id !== stuId);

    setStudents(temp);
  };

  return (
    <>
      <form style={{ border: "1px solid", padding: 8, m: 8 }}>
        <input type={"text"} placeholder="Name" name="name" required />
        <br />
        <input type={"url"} placeholder="Image" name="image" required />
        <br />
        <input type={"text"} placeholder="Grade" name="grade" required />
        <br />
        <label htmlFor="isSenior">Senior</label>
        <input
          type={"checkbox"}
          placeholder="isSenior"
          name="isSenior"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {students.map((stu) => (
          <Student key={stu.id} {...stu} deleteStudent={deleteStudent} />
        ))}
      </div>
    </>
  );
};

export default Crud;
