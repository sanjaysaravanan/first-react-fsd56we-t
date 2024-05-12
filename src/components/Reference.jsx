import { useRef } from "react";

const Reference = () => {
  // let count = 0;
  const ref = useRef(0);

  const btnRef = useRef(null);
  const divRef = useRef(null);
  const inpRef = useRef(null);
  const formRef = useRef(null);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`Clicked Times: ${ref.current}`);
    // count = count + 1;
    // alert(`Clicked Times: ${count}`);
  };

  const handleFunc = (e) => {
    console.log(e.target);
    console.log(btnRef.current);
    console.log(divRef.current);
    // ** Below should not be done **
    // console.log((divRef.current.style.backgroundColor = "green"));
    console.log(inpRef.current.value);
    formRef.current.reset();
  };

  return (
    <>
      <button ref={btnRef} onClick={handleFunc}>
        Click Me
      </button>
      <div ref={divRef}>
        <h1>Sample DIV Element</h1>
      </div>
      <input value="Sam" ref={inpRef} />
      <form ref={formRef}>
        <input value="kjkgjj" placeholder="Enter Name" />
        <input placeholder="Enter Age" />
      </form>
    </>
  );
};

export default Reference;
