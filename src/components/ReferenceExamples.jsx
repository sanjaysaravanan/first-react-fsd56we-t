/* eslint-disable react/prop-types */
import { useRef, forwardRef } from "react";

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

const ReferenceExample = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  const scrollFn = (imageRef) => {
    console.log(imageRef);
    imageRef.current.scrollIntoView({
      behavior: "instant",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <header style={{ position: "fixed", width: "100%", top: 0 }}>
        <button onClick={() => scrollFn(refOne)}>Stu One</button>
        <button onClick={() => scrollFn(refTwo)}>Stu Two</button>
        <button onClick={() => scrollFn(refThree)}>Stu Three</button>
      </header>
      <img
        style={{ height: 600, width: 600, objectFit: "contain" }}
        src={data[0].image}
        alt="Stu One"
        ref={refOne}
      />
      <img
        style={{ height: 600, width: 600, objectFit: "contain" }}
        src={data[1].image}
        alt="Stu Two"
        ref={refTwo}
      />
      <img
        style={{ height: 600, width: 600, objectFit: "contain" }}
        src={data[2].image}
        alt="Stu Three"
        ref={refThree}
      />
    </>
  );
};

// key, ref

const SampleInput = (props) => {
  console.log(props.key);
  return <input ref={props.inpRef} />;
};

const ReferenceExampleTwo = () => {
  const inpRef = useRef(null);

  const handleClick = () => {
    inpRef.current.focus();
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <SampleInput inpRef={inpRef} />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
};

export default ReferenceExampleTwo;
