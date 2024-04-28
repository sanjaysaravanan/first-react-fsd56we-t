/* eslint-disable no-unused-vars */
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    grade: "10th Grade",
    image: "https://example.com/john_doe.jpg",
    isSenior: true,
    isAbsent: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    grade: "9th Grade",
    image: "https://example.com/jane_smith.jpg",
    isSenior: false,
    isAbsent: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    grade: "11th Grade",
    image: "https://example.com/alice_johnson.jpg",
    isSenior: false,
    isAbsent: false,
  },
];

// eslint-disable-next-line react/prop-types
const Student = ({ id, name, grade, image, isSenior, toAbsent, isAbsent }) => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        padding: "16px",
        position: "relative",
      }}
    >
      {isSenior && (
        <i
          className="fa-regular fa-id-badge"
          style={{ position: "absolute", top: 10, right: 10 }}
        ></i>
      )}
      <img
        alt={name}
        style={{ height: "200px", width: "300px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
      />
      <h3>{name}</h3>
      <h4>{grade}</h4>
      <button onClick={toAbsent}>
        {isAbsent ? "Remove" : "Add To Absents"}
      </button>
    </div>
  );
};

const Students = () => {
  const [absentees, setAbsentees] = useState([]);

  const addToAbsentees = (id) => {
    setAbsentees([...absentees, id]);
  };

  return (
    <div
      style={{
        position: "relative",
        paddingTop: "200px",
      }}
    >
      <h1 style={{ position: "absolute", top: 10, right: 10 }}>
        Absentees ({absentees.length})
      </h1>
      {data.map((stu) => {
        return (
          <Student
            key={stu.id}
            {...stu}
            isAbsent={absentees.includes(stu.id)}
            toAbsent={() => addToAbsentees(stu.id)}
          />
        );
      })}
    </div>
  );
};

export default Students;
