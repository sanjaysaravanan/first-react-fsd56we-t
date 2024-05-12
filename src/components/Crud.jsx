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
      <button onClick={() => props.loadEditStudent(props.id)}>Edit</button>
      <button onClick={() => props.toggleSenior(props.id)}>
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
  toggleSenior: PropTypes.func,
  loadEditStudent: PropTypes.func,
};

const initialFormState = {
  name: "",
  grade: "",
  image: "",
  isSenior: false,
};

// Crud for Students
const Crud = () => {
  // Read all the students
  const [students, setStudents] = useState(data);
  const [displayStudents, setDisplayStudents] = useState(data);
  const [formState, setFormState] = useState(initialFormState);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

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

  const displayFun = (filName, studentsData = students) => {
    console.log(filName);
    if (filName === "junior") {
      setDisplayStudents(studentsData.filter((stu) => !stu.isSenior));
    } else if (filName === "senior") {
      setDisplayStudents(studentsData.filter((stu) => stu.isSenior));
    } else {
      setDisplayStudents(studentsData);
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
    displayFun(filter, tempStus);
  };

  // Load the Editing student to the form
  const loadEditStudent = (id) => {
    setEditId(id);

    const stuObj = students.find((student) => student.id === id);

    setFormState(stuObj);
  };

  // Edit a Student
  const editStudent = (stuData) => {
    stuData.id = editId;

    const index = students.findIndex((student) => student.id === editId);

    const tempStus = [...students];

    tempStus[index] = stuData;

    setStudents(tempStus);

    displayFun(filter, tempStus);

    setEditId(null);
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      editStudent(formState);
    } else {
      createStudent(formState);
    }

    setFormState(initialFormState);
  };

  // Deleting a student
  const deleteStudent = (stuId) => {
    const filteredData = students.filter((student) => student.id !== stuId);
    setStudents(filteredData);
    setDisplayStudents(filteredData);
  };

  // change junior <-> senior
  const toggleSenior = (id) => {
    // find the student
    const stuObj = students.find((student) => student.id === id);

    if (stuObj.isSenior) {
      stuObj.isSenior = false;
    } else {
      stuObj.isSenior = true;
    }

    const index = students.findIndex((student) => student.id === id);

    const tempStus = [...students];

    tempStus[index] = stuObj;

    setStudents(tempStus);

    setDisplayStudents(tempStus);
  };

  // Filtering the students
  const changeFilter = (e) => {
    setFilter(e.target.value);
    displayFun(e.target.value);
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
      <select value={filter} onChange={changeFilter}>
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
          <Student
            key={stu.id}
            {...stu}
            deleteStudent={deleteStudent}
            toggleSenior={toggleSenior}
            loadEditStudent={loadEditStudent}
          />
        ))}
      </div>
    </>
  );
};

export default Crud;
