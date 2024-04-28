import PropTypes from "prop-types";
import { useState } from "react";

const ToDo = (props) => {
  const [isDone, setDone] = useState(props.isDone);

  const handleDone = () => {
    if (!isDone) {
      setDone(true);
    } else {
      setDone(false);
    }
  };

  return (
    <>
      {props.Icon}
      {isDone ? (
        <h1 style={{ color: "green" }}>
          {props.index + 1}. {props.title}{" "}
          <i onClick={handleDone} className="fa-regular fa-circle-check"></i>
        </h1>
      ) : (
        <h1 style={{ color: "red" }}>
          {props.index + 1}. {props.title}{" "}
          <i onClick={handleDone} className="fa-regular fa-circle"></i>
        </h1>
      )}
    </>
  );
};

ToDo.propTypes = {
  isDone: PropTypes.bool,
  title: PropTypes.string,
  index: PropTypes.number,
  Icon: PropTypes.node,
};

export default ToDo;
