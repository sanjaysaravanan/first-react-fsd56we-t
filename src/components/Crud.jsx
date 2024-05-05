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
        style={{ height: "200px", width: "300px", objectFit: "contain" }}
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
  const [displayStudents, setDisplayStudents] = useState(data);
  const [formState, setFormState] = useState({
    name: "",
    grade: "12",
    image: "",
    isSenior: false,
  });

  const onNameChange = (e) => {
    setFormState({
      ...formState,
      name: e.target.value,
    });
  };

  const onImageChange = (e) => {
    setFormState({
      ...formState,
      image: e.target.value,
    });
  };

  const onGradeChange = (e) => {
    setFormState({
      ...formState,
      grade: e.target.value,
    });
  };

  // Commong input Change Event
  const handleChange = (e) => {
    if (e.target.name === "isSenior") {
      setFormState({
        ...formState,
        isSenior: e.target.checked,
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Creating a Student
  // Create a new student
  const createStudent = (stuData) => {
    const tempStu = { ...stuData };
    // id
    const id = Date.now();

    tempStu.id = id;

    const tempStus = [...students, tempStu];

    // addition of student
    setStudents(tempStus);
    setDisplayStudents(tempStus);
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    createStudent(formState);
  };

  // Deleting a student
  const deleteStudent = (stuId) => {
    const filteredData = students.filter((student) => student.id !== stuId);
    setStudents(filteredData);
    setDisplayStudents(filteredData);
  };

  // Filtering the students
  const changeFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value === "junior") {
      setDisplayStudents(students.filter((stu) => !stu.isSenior));
    } else if (e.target.value === "senior") {
      setDisplayStudents(students.filter((stu) => stu.isSenior));
    } else {
      setDisplayStudents(students);
    }
  };

  return (
    <>
      {console.log("students", students)}
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid", padding: 8, m: 8 }}
      >
        <input
          type={"text"}
          placeholder="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type={"url"}
          value={formState.image}
          onChange={handleChange}
          placeholder="Image"
          name="image"
          required
        />
        <br />
        <input
          type={"text"}
          placeholder="Grade"
          value={formState.grade}
          onChange={handleChange}
          name="grade"
          required
        />
        <br />
        <label htmlFor="isSenior">Senior</label>
        <input
          type={"checkbox"}
          onChange={handleChange}
          checked={formState.isSenior}
          placeholder="isSenior"
          name="isSenior"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <select onChange={changeFilter}>
        <option value="all">All</option>
        <option value="senior">Senior</option>
        <option value="junior">Junior</option>
      </select>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {displayStudents.map((stu) => (
          <Student key={stu.id} {...stu} deleteStudent={deleteStudent} />
        ))}
      </div>
    </>
  );
};

export default Crud;
