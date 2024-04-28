import PropTypes from "prop-types";

// Destructuring the Props at the argument level
const Subscription = ({ title, features }) => {
  return (
    <div
      key={title}
      style={{ border: "2px solid", margin: "16px", padding: "16px" }}
    >
      <h2>{title}</h2>
      {features.map((feat) => (
        <h3
          key={feat.title}
          style={{
            textDecoration: feat.isEnabled ? "none" : "line-through",
          }}
        >
          {feat.isEnabled && <i className="fa-solid fa-check"></i>}
          {!feat.isEnabled && <i className="fa-solid fa-xmark"></i>}{" "}
          {feat.title}
        </h3>
      ))}
    </div>
  );
};

Subscription.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      isEnabled: PropTypes.bool,
    })
  ),
};

export default Subscription;
