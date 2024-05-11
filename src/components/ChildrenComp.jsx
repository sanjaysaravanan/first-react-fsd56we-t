import PropTypes from "prop-types";

// destructing the child element or elements
const ChildrenComp = ({ children }) => {
  return (
    <div>
      <h1>Simple Content to Understand Inner Children</h1>
      {children}
    </div>
  );
};

ChildrenComp.propTypes = {
  children: PropTypes.element,
};

export default ChildrenComp;
